import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const figtree = Figtree({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to your favorite music and discover new artists with our Spotify clone app.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className={figtree.className}>
        <Sidebar>
          {children}
        </Sidebar>
        </body>
    </html>
  );
}
