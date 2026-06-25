import type { Metadata } from "next";
import {Outfit} from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Provider from "./provider";


const outfit = Outfit({
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: {
    template: "%s - AI Short Video Generator",
    default: "AI Short Video Generator",
  },
  description: "AI Short Video Generator using Next.js, Shadcn, Tailwind CSS, and Clerk",
  // icons: {
  //   icon: "/favicon.ico",
  // },
  keywords: ["AI", "Short Video", "Generator", "Next.js", "Shadcn", "Tailwind CSS", "Clerk"],
  authors: [{ name: "Romany T. Shehata & TubeGuruj - YouTube", url: "https://www.youtube.com/watch?v=eMplIjZ80Zs" }],
  creator: "AI Short Video Generator",
  publisher: "AI Short Video Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
      lang="en"
      className={outfit.className}
      >
        <body className="min-h-full flex flex-col">
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
