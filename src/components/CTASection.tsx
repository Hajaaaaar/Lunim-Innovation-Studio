
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { poppins } from '@/app/fonts';
import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

// --- SVG Icon Components for Social Links ---
const XIcon = () => (
    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.627L138.484 44.16H312.813L601.762 501.1L649.23 569.301L1079.44 1178.21H905.11L569.165 687.854V687.828Z" fill="currentColor"/></svg>
);
const LinkedInIcon = () => (
    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 2H3.5C2.67 2 2 2.67 2 3.5V20.5C2 21.33 2.67 22 3.5 22H20.5C21.33 22 22 21.33 22 20.5V3.5C22 2.67 21.33 2 20.5 2ZM8 19H5V8H8V19ZM6.5 6.73C5.52 6.73 4.75 5.96 4.75 4.98C4.75 4 5.52 3.23 6.5 3.23C7.48 3.23 8.25 4 8.25 4.98C8.25 5.96 7.48 6.73 6.5 6.73ZM19 19H16V13.7C16 12.03 15.44 10.86 14.12 10.86C12.98 10.86 12.22 11.66 11.93 12.41C11.82 12.68 11.79 13.06 11.79 13.44V19H8.79V8H11.79V9.29C12.21 8.54 13.06 7.75 14.97 7.75C17.26 7.75 19 9.11 19 12.06V19Z"/></svg>
);
const GitHubIcon = () => (
    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 5.134 20.076 9.153 21.413C9.82 21.532 10.046 21.137 10.046 20.807C10.046 20.51 10.034 19.595 10.034 18.51C7.46 19.068 6.642 17.374 6.642 17.374C6.043 15.869 5.23 15.467 5.23 15.467C4.032 14.649 5.313 14.664 5.313 14.664C6.633 14.758 7.308 16.039 7.308 16.039C8.487 18.028 10.438 17.433 11.127 17.128C11.233 16.329 11.554 15.776 11.89 15.485C9.227 15.188 6.433 14.137 6.433 10.03C6.433 8.865 6.843 7.915 7.514 7.164C7.398 6.867 7.027 5.728 7.632 4.29C7.632 4.29 8.71 3.953 11.1 5.539C12.127 5.262 13.223 5.129 14.316 5.125C15.409 5.129 16.495 5.262 17.522 5.539C19.912 3.953 20.99 4.29 20.99 4.29C21.594 5.728 21.224 6.867 21.108 7.164C21.78 7.915 22.188 8.865 22.188 10.03C22.188 14.148 19.392 15.188 16.722 15.485C17.15 15.889 17.51 16.685 17.51 17.84C17.51 19.463 17.496 20.763 17.496 21.1C17.496 21.412 17.72 21.654 18.396 21.53C22.41 20.073 25.542 16.416 25.542 12C25.542 6.477 21.065 2 15.542 2C13.886 2 12.32 2.379 10.925 3.033C11.889 2.457 12.978 2.146 14.156 2.146C19.58 2.146 24 6.626 24 12.05C24 17.475 19.58 21.954 14.156 21.954C13.003 21.954 11.936 21.66 11.002 21.144C9.998 21.7 8.884 22 7.658 22C7.658 22 7.658 22 7.658 22C3.418 22 0 18.582 0 14.342C0 11.39 1.636 8.84 4.072 7.427C4.108 7.406 4.144 7.385 4.18 7.364C4.168 7.332 4.155 7.3 4.143 7.268C3.06 6.335 2.408 5.013 2.408 3.525C2.408 1.587 3.995 0 5.933 0C7.29 0 8.444 0.692 9.153 1.765C9.897 1.282 10.78 1 11.758 1C11.758 1 11.758 1 11.758 1C11.952 1 12.143 1.012 12.33 1.033C12 2 12 2 12 2Z" /></svg>
);

const icons = { X: <XIcon />, LinkedIn: <LinkedInIcon />, GitHub: <GitHubIcon /> };

type SocialLink = { platform: keyof typeof icons; url: string; };
type CTASectionProps = { headline?: string; subtext?: string; buttonText?: string; buttonLink?: string; email?: string; socialLinks?: SocialLink[]; };

export default function CTASection({
  headline = "Let's build what's next",
  subtext = "Have a project in mind, or just want to say hello? We'd love to hear from you.",
  buttonText = "Get in Touch",
  buttonLink = "/contact",
  email = "hello@lunim.studio",
  socialLinks = [
    { platform: 'X', url: '#' },
    { platform: 'LinkedIn', url: '#' },
    { platform: 'GitHub', url: '#' },
  ]
}: CTASectionProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    }
    // Cleanup function to destroy the instance
    return () => (node as any)?.vanillaTilt?.destroy();
  }, []);

  return (
    
    <div className="bg-white pb-12">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        
      >
        <div className="bg-slate-50 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 lg:p-12">
            {/* Left Column: The Call to Action */}
            <div className="lg:col-span-7 text-center lg:text-left">
                <h2 className={`${poppins.className} text-4xl font-bold text-gray-900`}>
                    {headline}
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                    {subtext}
                </p>
                <div className="mt-8">
                    <Link
                        href={buttonLink}
                        className="inline-block bg-black text-white px-8 py-3 rounded-lg text-base font-bold hover:bg-gray-800 transition-transform duration-300 hover:scale-105"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
            
            {/* Right Column: The "Tilting" Contact Card */}
            <div className="lg:col-span-5" ref={tiltRef}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transform-style-3d">
                    <h3 className="text-lg font-bold text-gray-900">Contact Details</h3>
                    <p className="mt-4 text-gray-600">
                        Prefer to send a direct email?
                    </p>
                    <a href={`mailto:${email}`} className="mt-1 inline-block font-semibold text-indigo-600 hover:text-indigo-800">
                        {email}
                    </a>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900">Follow us</h3>
                        <div className="mt-4 flex items-center gap-4">
                            {socialLinks.map(link => (
                                <a key={link.platform} href={link.url} className="group">
                                    <div className="w-10 h-10 bg-slate-100 hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300">
                                        {icons[link.platform]}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}