import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../app/component/headone'
import Footer from '../app/component/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book My Saloon",
  description: "Book your salon appointment online, skip the wait, and step into a world of beauty at your convenience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
