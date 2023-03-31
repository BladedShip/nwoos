import { Poppins } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import NavLinks from "@/components/NavLinks";
import SearchBox from "@/components/SearchBox";
import Providers from "@/components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Nwoos | The crappy news app",
  description: "Your crappy news app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={poppins.className}>
          <Header />
          <NavLinks />
          <SearchBox />
          <div className="max-w-6xl mx-auto pt-4">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
