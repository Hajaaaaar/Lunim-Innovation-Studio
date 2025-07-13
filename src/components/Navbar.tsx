// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/fonts';

type NavLink = {
  text: string;
  url: string;
};

type NavbarProps = {
  logoImage?: string;
  brandName?: string;
  navLinks?: NavLink[];
  ctaText?: string;
  ctaLink?: string;
};

export default function Navbar({
  logoImage = '/images/logo.png',
  brandName = 'Lunim',
  navLinks = [
    { text: 'Home', url: '/' },
    { text: 'Packages', url: '/packages' },
    { text: 'Expertise', url: '/expertise' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ],
  ctaText = 'Get Started',
  ctaLink = '/get-started',
}: NavbarProps) {
  return (
    // 1. Changed background to your dark color with a subtle bottom border
    <nav className="bg-brand-dark h-20 w-full fixed top-0 left-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          <Image src={logoImage} alt="Logo" width={44} height={44} className="h-11 w-auto" />
          {/* 2. Changed brand name text to white */}
          <span className={`${poppins.className} text-2xl font-semibold text-white`}>{brandName}</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            // 3. Changed link colors to be light grey, turning white on hover
            <Link key={link.url} href={link.url} className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>{link.text}</span>
              {/* The blue underline will pop nicely against the dark background */}
              <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          {/* The orange button provides a great contrast against the dark navbar */}
          <Link href={ctaLink} className="bg-brand-accent text-brand-dark px-6 py-2.5 rounded-lg font-bold hover:brightness-90 transition-all duration-300">
            {ctaText}
          </Link>
        </div>

      </div>
    </nav>
  );
}