import React from 'react';
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { FormModalProvider } from './context/FormModalContext';
import Analytics from './components/Analytics';

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
  title: 'SynaplyAI - Next-gen AI for Business',
  description: 'SynaplyAI connects all your business applications into one unified intelligence layer.',
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
      <body className="bg-gray-900 text-white">
        <FormModalProvider>
          {children}
        </FormModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
