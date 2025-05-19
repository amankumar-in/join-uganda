import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henry Byamukama Katabazi | A New Vision for Uganda",
  description: "Official campaign website for Henry Byamukama Katabazi, presidential candidate for Uganda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="font-bold text-lg">KATABAZI 2026</Link>
              </div>
              <nav className="hidden sm:flex space-x-8">
                <Link href="/" className="font-medium hover:underline hover:underline-offset-4">Home</Link>
                <Link href="/about" className="font-medium hover:underline hover:underline-offset-4">About</Link>
                <Link href="/manifesto" className="font-medium hover:underline hover:underline-offset-4">Manifesto</Link>
                <Link href="/contact" className="font-medium hover:underline hover:underline-offset-4">Contact</Link>
              </nav>
              <div className="sm:hidden">
                <button className="inline-flex items-center justify-center p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className="sm:hidden hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 font-medium">Home</Link>
              <Link href="/about" className="block px-3 py-2 font-medium">About</Link>
              <Link href="/manifesto" className="block px-3 py-2 font-medium">Manifesto</Link>
              <Link href="/contact" className="block px-3 py-2 font-medium">Contact</Link>
            </div>
          </div>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-black text-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">KATABAZI 2026</h3>
                <p className="text-sm">For God and My Country</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
                  <li><Link href="/about" className="text-sm hover:underline">About</Link></li>
                  <li><Link href="/manifesto" className="text-sm hover:underline">Manifesto</Link></li>
                  <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-sm">National Campaign Headquarters<br />
                Plot 20 Katonga Road, Nakasero<br />
                Kampala, Uganda</p>
                <p className="text-sm mt-2">info@katabaziforpresident.ug</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-sm text-center">© 2024 Henry Byamukama Katabazi Presidential Campaign. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
