
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
    { text: 'Clients', url: '/clients' },
    { text: 'Services', url: '/services' },
    { text: 'Our Work', url: '/our-work' },
    { text: 'About', url: '/about' },
  ],
  ctaText = 'Contact Us',
  ctaLink = '/contact',
}: NavbarProps) {
  return (
    <nav className="bg-white/80 backdrop-blur-md h-20 w-full fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          <Image src={logoImage} alt="Logo" width={44} height={44} className="h-11 w-auto" />
          <span className={`${poppins.className} text-2xl font-semibold text-gray-800`}>{brandName}</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.url} href={link.url} className="text-gray-600 hover:text-black transition-colors duration-300 relative group">
              <span>{link.text}</span>
              <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link href={ctaLink} className="bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
            {ctaText}
          </Link>
        </div>

      </div>
    </nav>
  );
}