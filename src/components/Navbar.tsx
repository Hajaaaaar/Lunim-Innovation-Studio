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
    <nav className="bg-black h-20 w-full fixed top-0 left-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          <Image src={logoImage} alt="Logo" width={44} height={44} className="h-11 w-auto" />
          <span className={`${poppins.className} text-2xl font-semibold text-white`}>{brandName}</span>
        </Link>


        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.url} 
              href={link.url} 
              className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300 relative group"
            >
              <span>{link.text}</span>
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#00ff88] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link 
            href={ctaLink} 
            className="border-2 border-[#2D9CDB] text-[#2D9CDB] px-6 py-2 rounded-lg font-bold hover:bg-[#00ff88] hover:text-black transition-all duration-300"
          >
            {ctaText}
          </Link>
        </div>

      </div>
    </nav>
  );
}
