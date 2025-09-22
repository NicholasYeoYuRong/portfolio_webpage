"use client";

import React, {useEffect, useRef, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {X, Minus, Send, Loader2} from "lucide-react";
import type { UIMessage, TextPart } from "ai";

// ---------- Types ----------
export type ToggleChatbotProps = {
  api?: string;               // defaults to /api/chat
  initialOpen?: boolean;
  side?: "right" | "left";
  offset?: { x?: number; y?: number };
  title?: string;
  className?: string;
};

// A tiny helper to join class strings safely
function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

// ---------- Component ----------
export default function ToggleChatbot({
  api = "/api/chat",
  initialOpen = false,
  side = "right",
  offset = { x: 24, y: 24 },
  title = "Assistant",
  className,
}: ToggleChatbotProps) {
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") return initialOpen;
    const saved = window.localStorage.getItem("toggle-chatbot:isOpen");
    return saved ? JSON.parse(saved) : initialOpen;
  });
  const [isMinimized, setIsMinimized] = useState(false);
  const [unread, setUnread] = useState(0);

  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const typingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const fullAssistantRef = useRef<string>("");

  function updateAssistantMessage(id: string, text: string) {
    setMessages(prev =>
      prev.map(m =>
        m.id === id
          ? { ...m, parts: [{ type: "text", text }] as TextPart[] }
          : m
      )
    );
  }

  function skipTyping(finalText: string, id: string) {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    typingTimerRef.current = null;
    setIsTyping(false);
    updateAssistantMessage(id, finalText);
  }

  // Persist open state
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("toggle-chatbot:isOpen", JSON.stringify(isOpen));
    }
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Auto-scroll on new messages
  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, isLoading]);

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;
    const onClick = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) {
        const toggle = document.getElementById("toggle-chatbot-button");
        if (toggle && toggle.contains(e.target as Node)) return;
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  // Reset unread when opened
  useEffect(() => {
    if (isOpen && !isMinimized) setUnread(0);
  }, [isOpen, isMinimized]);

  const offsetStyle: React.CSSProperties = {
    [side === "right" ? "right" : "left"]: (offset.x ?? 24) + "px",
    bottom: (offset.y ?? 24) + "px",
  } as React.CSSProperties;

  async function handleSend() {
    const text = inputValue.trim();
    if (!text) return;

    setError(null);
    setIsLoading(true);

    // optimistic user message
    const userMsg: UIMessage = {
      id: crypto.randomUUID(),
      role: "user",
      parts: [{ type: "text", text }] as TextPart[],
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");

    try {
      // send full transcript so your /api/chat has context
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const contentType = res.headers.get("content-type") || "";
      const payload = contentType.includes("application/json")
        ? await res.json()
        : await res.text();

      if (!res.ok) {
        const msg = typeof payload === "string" ? payload : (payload?.error ?? "Request failed");
        throw new Error(msg);
      }

      // Try common DO/OpenAI shapes first
      let assistantText = "";
      if (typeof payload === "string") {
        try {
          const j = JSON.parse(payload);
          assistantText = j?.choices?.[0]?.message?.content ?? j?.text ?? payload;
        } catch {
          assistantText = payload;
        }
      } else {
        assistantText = payload?.choices?.[0]?.message?.content
          ?? payload?.text
          ?? "";
      }

      const assistantId = crypto.randomUUID();

      const assistantMsg: UIMessage = {
        id: assistantId,
        role: "assistant",
        parts: [{ type: "text", text: "" }] as TextPart[],
      };
      setMessages(prev => [...prev, assistantMsg]);

      // Typewriter reveal
      const chars = [...assistantText];       // handles emojis/utf-16
      const speedMs = 18;                     // typing speed (lower = faster)
      let i = 0;

      setIsTyping(true);
      fullAssistantRef.current = assistantText;
      typingTimerRef.current = setInterval(() => {
        i++;
        const partial = chars.slice(0, i).join("");
        updateAssistantMessage(assistantId, partial);

        // done
        if (i >= chars.length) {
          if (typingTimerRef.current) clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
          setIsTyping(false);
        }
      }, speedMs);

      // bump unread if panel is closed/minimized
      if (!isOpen || isMinimized) setUnread(n => n + 1);
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        id="toggle-chatbot-button"
        type="button"
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
        aria-controls="toggle-chatbot-panel"
        className={cx(
          "fixed z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-lg hover:shadow-xl transition-all overflow-hidden hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500",
          className,
        )}
        style={offsetStyle}
      >
        <img src="/images/BarryBotMedia/BarryIcon.png" alt="Barry Bot Icon" />
        {/* <BotMessageSquare className="h-8 w-8" /> */}
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-medium text-primary-foreground">
            {unread}
          </span>
        )}
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            id="toggle-chatbot-panel"
            role="dialog"
            aria-label="AI assistant chat"
            initial={{opacity: 0, scale: 0.98, y: 8}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.98, y: 8}}
            transition={{type: "spring", stiffness: 380, damping: 32}}
            className={cx(
              "fixed z-50 grid w-[360px] max-w-[92vw] grid-rows-[auto,1fr,auto] overflow-hidden rounded-2xl border bg-background shadow-2xl",
              side === "right" ? "right-6" : "left-6",
              "bottom-24 sm:bottom-28",
            )}
            ref={containerRef}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b p-3">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden />
                <span className="text-sm font-medium">{title}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
                  onClick={() => setIsMinimized(m => !m)}
                  aria-label={isMinimized ? "Restore" : "Minimize"}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-3">
                <div className="space-y-3">
                  {messages.length === 0 && (
                    <div className="rounded-xl border bg-muted/40 p-3 text-xs text-muted-foreground">
                      Hi! My name is Barry! I'll try my best to answer your questions on Nicholas! How can I help you today? 😊
                    </div>
                  )}

                  {messages.map((m) => (
                    <ChatBubble key={m.id} message={m} />
                  ))}

                  {isTyping && (
                    <button
                      className="ml-auto text-xs underline text-muted-foreground hover:text-foreground"
                      onClick={() => {
                        const last = [...messages].reverse().find(m => m.role === "assistant");
                        if (last) skipTyping(fullAssistantRef.current, last.id);
                      }}
                    >
                      Skip
                    </button>
                  )}

                  {isLoading && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Thinking…
                    </div>
                  )}

                  {error && (
                    <div className="rounded-xl border border-red-300 bg-red-50 p-3 text-xs text-red-600">
                      {error}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Input */}
            {!isMinimized && (
              <form
                className="flex items-end gap-2 border-t p-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message…"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  className="min-h-[40px] max-h-32 flex-1 resize-none rounded-xl border bg-background p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="inline-flex h-10 items-center gap-1 rounded-xl border bg-primary px-3 text-sm font-medium text-primary-foreground disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  <span className="sr-only">Send</span>
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ---------- UI bits ----------
function ChatBubble({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";
  const text = message.parts
    .map((p) => (p.type === "text" || p.type === "reasoning") ? (p as TextPart).text : "")
    .join("");
  return (
    <div className={cx("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cx(
          "max-w-[85%] rounded-2xl border px-3 py-2 text-sm shadow-sm",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted/50"
        )}
      >
        {text}
      </div>
    </div>
  );
}
