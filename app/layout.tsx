import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { site } from "./lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theophilus-ak.vercel.app"),
  title: {
    default: `${site.name} — Frontend Engineer`,
    template: `%s | ${site.name}`,
  },
  description:
    "Theophilus Akowuah is a Frontend Engineer based in Accra, Ghana, building scalable web applications with React, Next.js and TypeScript — including enterprise dashboards, HR platforms and ERP-integrated business systems.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Theophilus Akowuah",
  ],
  openGraph: {
    type: "website",
    url: "https://theophilus-ak.vercel.app",
    siteName: site.name,
    title: `${site.name} — Frontend Engineer`,
    description: site.tagline,
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Frontend Engineer`,
    description: site.tagline,
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.classList.toggle('dark',t==='dark')}catch(e){document.documentElement.classList.add('dark')}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-sans bg-bg text-ink min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
