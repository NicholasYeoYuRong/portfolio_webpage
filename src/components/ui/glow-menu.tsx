"use client";

import * as React from "react";
import {
  motion,
  HTMLMotionProps,
  cubicBezier,
  Variants,
  AnimatePresence,
} from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { LucideIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  icon: LucideIcon | React.FC<{ className?: string }>;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuItem[];
  activeItem?: string;
  onItemClick?: (label: string) => void;
  mobileSide?: "left" | "right";
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: cubicBezier(0.4, 0, 0.2, 1) },
      scale: { type: "spring" as const, stiffness: 300, damping: 25 },
    },
  },
} satisfies Variants;

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: cubicBezier(0.4, 0, 0.2, 1) },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

const drawerVariants: Variants = {
  closed: (side: "left" | "right") => ({
    x: side === "left" ? "-100%" : "100%",
    transition: { duration: 0.28, ease: cubicBezier(0.33, 1, 0.68, 1) },
  }),
  open: {
    x: 0,
    transition: { duration: 0.32, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

const overlayVariants: Variants = {
  closed: { opacity: 0, pointerEvents: "none" as any },
  open: { opacity: 1, pointerEvents: "auto" as any },
};

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  ({ className, items, activeItem, onItemClick, mobileSide = "left", ...props }, ref) => {
    const { theme } = useTheme();
    const isDarkTheme = theme === "dark";
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);

    // Close drawer on route change
    React.useEffect(() => {
      setOpen(false);
    }, [pathname]);

    // ESC to close
    React.useEffect(() => {
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      if (open) window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
      <div ref={ref} className="relative">
        {/* Desktop bar */}
        <motion.nav
          className={cn(
            "hidden md:block p-2 rounded-2xl bg-linear-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden",
            className,
          )}
          initial="initial"
          whileHover="hover"
          {...(props as HTMLMotionProps<"nav">)}
        >
          <motion.div
            className={`absolute -inset-2 bg-gradient-radial from-transparent ${
              isDarkTheme
                ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
                : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
            } to-transparent rounded-3xl z-0 pointer-events-none`}
            variants={navGlowVariants}
          />
          <ul className="flex items-center gap-2 relative z-10">
            {items.map((item) => {
              const Icon = item.icon as LucideIcon;
              const isActive = item.label === activeItem;
              return (
                <motion.li key={item.label} className="relative">
                  <Link href={item.href} className="block w-full" onClick={() => onItemClick?.(item.label)}>
                    <motion.div
                      className="block rounded-xl overflow-visible group relative"
                      style={{ perspective: "600px" }}
                      whileHover="hover"
                      initial="initial"
                    >
                      <motion.div
                        className="absolute inset-0 z-0 pointer-events-none"
                        variants={glowVariants}
                        animate={isActive ? "hover" : "initial"}
                        style={{
                          background: item.gradient,
                          opacity: isActive ? 1 : 0,
                          borderRadius: "16px",
                        }}
                      />
                      <motion.div
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl",
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                        )}
                        variants={itemVariants}
                        transition={sharedTransition}
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                      >
                        <span
                          className={cn(
                            "transition-colors duration-300",
                            isActive ? item.iconColor : "text-foreground",
                            `group-hover:${item.iconColor}`,
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>{item.label}</span>
                      </motion.div>
                      <motion.div
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl",
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                        )}
                        variants={backVariants}
                        transition={sharedTransition}
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                      >
                        <span
                          className={cn(
                            "transition-colors duration-300",
                            isActive ? item.iconColor : "text-foreground",
                            `group-hover:${item.iconColor}`,
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>{item.label}</span>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-pressed={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden fixed top-4 z-[90] inline-flex h-10 w-10 items-center justify-center", // md:hidden to show only on mobile
            // "rounded-lg bg-background/70 backdrop-blur-md border border-border/40 shadow-lg",
            // "hover:bg-background/80 active:bg-background/90",
            // "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
            // "transition-all duration-200",
            mobileSide === "left" ? "left-4" : "right-4"
          )}
        >
          {open ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile drawer */}
        <AnimatePresence initial={false} mode="sync">
          {open && (
            <>
              {/* Overlay */}
              <motion.button
                aria-label="Close menu"
                className="fixed inset-0 z-[80] bg-black/40"
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                onClick={() => setOpen(false)}
              />
              {/* Panel */}
              <motion.aside
                className={cn(
                  "fixed top-0 z-[81] h-dvh w-[84vw] max-w-[360px]",
                  "bg-background/70 backdrop-blur-md",   // ← translucent with blur
                  "border shadow-xl",
                  mobileSide === "left" ? "left-0 border-r" : "right-0 border-l"
                )}
                custom={mobileSide}
                initial="closed"
                animate="open"
                exit="closed"
                variants={drawerVariants}
              >
                <div className="h-13" /> {/* spacer */}

                <nav className="p-2">
                  <ul className="flex flex-col gap-1">
                    {items.map((item) => {
                      const Icon = item.icon as LucideIcon;
                      const isActive = item.label === activeItem;

                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => onItemClick?.(item.label)}
                            className={cn(
                              "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
                              isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/70",
                            )}
                          >
                            {/* subtle glow background for active item */}
                            {isActive && (
                              <span
                                className="absolute inset-0 -z-10 rounded-lg"
                                style={{ background: item.gradient, opacity: 0.8 }}
                              />
                            )}
                            <Icon className={cn("h-5 w-5", isActive ? item.iconColor : "text-foreground")} />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

MenuBar.displayName = "MenuBar";
