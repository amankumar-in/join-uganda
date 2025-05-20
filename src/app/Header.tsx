"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleMenuClose = () => setMobileMenuOpen(false);
  return (
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
            <button
              className="inline-flex items-center justify-center p-2 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={handleMenuToggle}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`sm:hidden${mobileMenuOpen ? "" : " hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 font-medium" onClick={handleMenuClose}>Home</Link>
          <Link href="/about" className="block px-3 py-2 font-medium" onClick={handleMenuClose}>About</Link>
          <Link href="/manifesto" className="block px-3 py-2 font-medium" onClick={handleMenuClose}>Manifesto</Link>
          <Link href="/contact" className="block px-3 py-2 font-medium" onClick={handleMenuClose}>Contact</Link>
        </div>
      </div>
    </header>
  );
} 