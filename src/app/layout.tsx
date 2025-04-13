import type { Metadata } from "next";
import { Geist, Geist_Mono, Antic_Didone } from "next/font/google";
import "./globals.css";
import ShowHeader from "@/utils/ShowHeader";
import Header from "@/components/Home/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anticDidone = Antic_Didone({
  variable: "--font-anticDidone",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anticDidone.variable} antialiased`}
      >
        <ShowHeader>
          <Header />
        </ShowHeader>
        {children}
      </body>
    </html>
  );
}
