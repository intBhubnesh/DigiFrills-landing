import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/sections/LoadingScreen";

const InterSans = Inter({
  variable: "--font-Inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigiFrills",
  description: "Reshaping the technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterSans.variable}  antialiased`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
