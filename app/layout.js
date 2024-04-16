import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emoji Picker",
  description:
    "Easily Express Yourself Online! Discover a vast of emojis to add flair, humor, or emotion to your messages. Whether chatting, emailing, or posting on social media, find the perfect emoji to convey your thoughts instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
