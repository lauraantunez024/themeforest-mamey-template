import { Work_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from 'next/link';

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Sapote",
  description: "Copyright Laura Antunez",
  visualViewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={workSans.className}>
      <header className='z-10 inline flex flex-row justify-end'>
          <Image
            className="inline mr-5 mt-5"
            src="/logo.png"
            width={100}
            height={100}
            alt="Tech Sapote Logo Image"
          />
      </header>
        {children}</body>
    </html>
  );
}
