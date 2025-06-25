
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/fonts';


const XIcon = () => ( <svg className="w-5 h-5" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.627L138.484 44.16H312.813L601.762 501.1L649.23 569.301L1079.44 1178.21H905.11L569.165 687.854V687.828Z" /></svg> );
const LinkedInIcon = () => ( <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 2H3.5C2.67 2 2 2.67 2 3.5V20.5C2 21.33 2.67 22 3.5 22H20.5C21.33 22 22 21.33 22 20.5V3.5C22 2.67 21.33 2 20.5 2ZM8 19H5V8H8V19ZM6.5 6.73C5.52 6.73 4.75 5.96 4.75 4.98C4.75 4 5.52 3.23 6.5 3.23C7.48 3.23 8.25 4 8.25 4.98C8.25 5.96 7.48 6.73 6.5 6.73ZM19 19H16V13.7C16 12.03 15.44 10.86 14.12 10.86C12.98 10.86 12.22 11.66 11.93 12.41C11.82 12.68 11.79 13.06 11.79 13.44V19H8.79V8H11.79V9.29C12.21 8.54 13.06 7.75 14.97 7.75C17.26 7.75 19 9.11 19 12.06V19Z"/></svg> );
const GitHubIcon = () => ( <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c2.964 0 5.683.916 7.998 2.454-1.294-.48-2.38-1.488-2.91-2.91C6.012 10.368 5.485 8.97 5.485 7.5c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5c0 1.47-.527 2.868-1.573 4.044-.53.522-1.236.9-2.012 1.054.495.426.83 1.02.83 1.706v5.202c2.89-.92 5.163-3.344 5.742-6.342C21.39 12.04 20.48 9.878 18.89 8.288c-1.59-1.59-3.752-2.5-5.942-2.5-3.038 0-5.5 2.462-5.5 5.5 0 1.47.527 2.868 1.573 4.044.53.522 1.236.9 2.012 1.054-.495-.426-.83-1.02-.83-1.706V11.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v3.5c2.89-.92 5.163-3.344 5.742-6.342C21.39 12.04 20.48 9.878 18.89 8.288 17.3 6.698 15.138 5.79 12.95 5.79 9.912 5.79 7.45 8.252 7.45 11.29c0 1.47.527 2.868 1.573 4.044.53.522 1.236.9 2.012 1.054-.495-.426-.83-1.02-.83-1.706V11.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v3.5c2.89-.92 5.163-3.344 5.742-6.342C21.39 12.04 20.48 9.878 18.89 8.288 17.3 6.698 15.138 5.79 12.95 5.79 9.912 5.79 7.45 8.252 7.45 11.29c0 1.47.527 2.868 1.573 4.044.53.522 1.236.9 2.012 1.054-.495-.426-.83-1.02-.83-1.706V11.5c0-1.657 1.343-3 3-3s3 1.343 3 3v3.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-2.044c-1.283.48-2.38 1.488-2.91 2.91-1.076 2.928.028 6.342 2.91 7.262C11.18 21.92 10.09 22 9 22c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9c0 2.21-1.002 4.242-2.612 5.624C14.28 19.38 13.19 20 12 20c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5c.552 0 1.052.298 1.312.75.26-.452.76-.75 1.312-.75.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5c-.552 0-1.052-.298-1.312-.75-.26.452-.76.75-1.312.75-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3v.01c0 1.657-1.343 3-3 3s-3-1.343-3-3V12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.21 0 4.242-1.002 5.624-2.612C15.38 18.28 16 17.19 16 16c0-.828-.672-1.5-1.5-1.5S13 15.172 13 16c0 .552.298 1.052.75 1.312.452-.26.75-.76.75-1.312 0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .552.298 1.052.75 1.312.452-.26.75-.76.75-1.312 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 2.932 1.838 5.423 4.396 6.342C9.48 20.39 8.24 21 7 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9c0 2.21-1.002 4.242-2.612 5.624C14.28 19.38 13.19 20 12 20c-.828 0-1.5-.672-1.5-1.5S11.172 17 12 17s1.5.672 1.5 1.5c0 .552-.298 1.052-.75 1.312-.452-.26-.75-.76-.75-1.312 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .552-.298 1.052-.75 1.312-.452-.26-.75-.76-.75-1.312 0-1.657 1.343-3 3-3s3 1.343 3 3c0 2.932-1.838 5.423-4.396 6.342C10.52 20.39 9.24 21 8 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9z" /></svg>
);
const icons = { X: <XIcon />, LinkedIn: <LinkedInIcon />, GitHub: <GitHubIcon /> };

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Lunim Logo" width={36} height={36} />
              <span className={`${poppins.className} text-xl font-semibold`}>Lunim</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Creating unforgettable digital experiences.
            </p>
          </div>

          {/* Spacer Column */}
          <div className="hidden md:block"></div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Navigation</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-base text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-base text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/our-work" className="text-base text-gray-300 hover:text-white">Our Work</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Socials */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Follow Us</h3>
            <div className="flex mt-4 space-x-6">
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">X</span><XIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">LinkedIn</span><LinkedInIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">GitHub</span><GitHubIcon /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {currentYear} Lunim Innovation Studio, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}