import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { ChatWidgetPlaceholder } from "@/components/ChatWidgetPlaceholder";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE_CONFIG } from "@/lib/config";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: "Dental care that feels different.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* <!-- CHATBOT EMBED SCRIPT HERE --> */}
        <SmoothScroll>
          <Navbar />
          {children}
          <ChatWidgetPlaceholder />
        </SmoothScroll>
      </body>
    </html>
  );
}
