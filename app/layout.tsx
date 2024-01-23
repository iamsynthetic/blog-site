import type { Metadata } from "next";
import { Anton, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "@/components/Providers";
// import { Toaster } from "react-hot-toast";

const anton400 = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton400",
});
const robotomono200 = Roboto_Mono({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-robotomono200",
});
const robotomono400 = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-robotomono400",
});
const robotomono600 = Roboto_Mono({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-robotomono600",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${anton400.variable} ${robotomono200.variable} ${robotomono400.variable} ${robotomono600.variable}`}
      >
        <NextAuthProvider>
          <div className="w-full px-5 md:px-20 mx-auto py-10 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-auto">{children}</div>
            <Footer />
          </div>
          {/* <Toaster /> */}
        </NextAuthProvider>
      </body>
    </html>
  );
}
