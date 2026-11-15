import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";




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
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
        </body>
    </html>
  );
}
