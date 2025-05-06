import type { Metadata } from "next";
import {Urbanist} from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({subsets: ["latin"]});


export const metadata: Metadata = {
  title: "JuanMa Portfolio",
  description: "Landing page made by JuanMa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        <Navbar />
        <Header />
        {children}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
        )}
      </body>
    </html>
  );
}
