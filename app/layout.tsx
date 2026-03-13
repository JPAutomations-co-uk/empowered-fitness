import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: "Empowered Fitness UK | PT & Nutrition Specialist",
  description: "Level 4 Personal Trainer specialising in rehab, functional fitness & nutrition in Sutton Coldfield & Online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background-primary text-text-primary antialiased selection:bg-accent selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
