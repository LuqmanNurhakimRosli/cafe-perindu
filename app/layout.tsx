import type { Metadata } from "next";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";

import LogoDesk from "@/public/printforge-logo.svg";
import LogoMob from "@/public/printforge-logo-icon.svg";

import "./globals.css";
import {WebVitals} from "./components/web-vitals";

const albertsans = Albert_Sans (
  {
    subsets: ["latin"],
    display: "swap"  }
)

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
});

export const metadata: Metadata = {
  title: "Cafe Perindu",
  description: "Typical Cafe in Perindu Hostel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ ` ${albertsans.className} ${montserrat.variable}`}
      >
        <WebVitals />
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              {/* Desktop logo */}
              <img
                src= {LogoDesk.src}
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile logo */}
              <img
                src= {LogoMob.src}
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
