import React from 'react';
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { FormModalProvider } from './context/FormModalContext';

// Use Inter as a replacement for Geist
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

// Use JetBrains Mono as a replacement for Geist Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "SynaplyAI - Create, Collaborate, and Scale with AI",
  description: "Enterprise-grade AI content creation with real-time collaboration and adaptive AI handling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <FormModalProvider>
          {children}
        </FormModalProvider>
      </body>
    </html>
  );
}
