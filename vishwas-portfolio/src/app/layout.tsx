import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Load Inter font with multiple weights
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", // Tailwind custom variable
});

export const metadata: Metadata = {
  title: "Vishwas Raj Batham | Portfolio",
  description: "Personal portfolio website of Vishwas Raj Batham",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white dark:bg-gray-950 transition-colors">
        {children}
      </body>
    </html>
  );
}
