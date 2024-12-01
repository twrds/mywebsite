import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const roboto = Roboto_Flex ({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jonathan Ernst",
  description: "Modern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
            {children}

      </body>
    </html>
  );
}
