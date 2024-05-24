import { Work_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import HamburgerMenu from "./components/HamburgerMenu";

// const function showMenu() {

// }
import Link from 'next/link';

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Creative Portfolio",
  description: "Copyright Laura Antunez",
  visualViewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={workSans.className}>
      <header className='w-screen p-5'>
      <HamburgerMenu/>
      </header>
        {children}</body>
    </html>
  );
}
