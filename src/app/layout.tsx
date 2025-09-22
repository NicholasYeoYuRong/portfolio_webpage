import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Header from "@/components/Header"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import  ScrollToTop  from "@/components/ScrollToTop"
import { FooterSection } from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";
import ToggleChatbot from "@/components/ToggleChatbot";
import FadeContent from "@/components/FadeContent";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick's Portfolio",
  description: "Showcasing the projects and skills of Nicholas Yeo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`bg-stone-500/0 ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SplashCursor/>
          <ShootingStars />
          <StarsBackground />
          <Header />
          <main>
            {children}
            <ToggleChatbot api="/api/chat" title="Barry, AI Assistant" initialOpen={false} />
          </main>
          <FooterSection />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
