import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Define local fonts
const primaryFont = localFont({
  src: "./fonts/PrimaryFont.woff2",
  display: "swap",
  variable: "--font-primary",
});

const secondaryFont = localFont({
  src: "./fonts/SecondaryFont.woff2",
  display: "swap",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "remiel - engineer at the intersection of design & development",
  description: "Portfolio of remiel - engineer, designer, and developer",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${primaryFont.variable} ${secondaryFont.variable}`}
    >
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
