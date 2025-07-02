import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair } from "next/font/google";
import "./globals.css";
import ShowHeader from "@/utils/ShowHeader";
import Wrapper from "@/Wrapper/Wrapper";
import ScrollUpButton from "@/utils/ScrollUpButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair({
  variable: "--font-playfair",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tattoo Animated Website.",
    template: "%s | Tattoo Animated Website.",
  },
  description: ` Discover bold, custom tattoo artistry at Tatto Youth — a 
  modern tattoo company specializing in unique designs, fine-line work, 
  and immersive experiences. Explore our portfolio through a visually stunning, 
  scroll-animated website built with cutting-edge web technologies. 
  Whether you're seeking your first ink or adding to your collection, our 
  professional artists turn your vision into skin-deep masterpieces. 
  Located in Melbourne. Book your session today!`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Wrapper>
          <ShowHeader />
          {children}
          <ScrollUpButton />
        </Wrapper>
      </body>
    </html>
  );
}
