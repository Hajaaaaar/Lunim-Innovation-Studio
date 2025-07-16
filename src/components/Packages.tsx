'use client';

import { motion } from 'framer-motion';
import { poppins } from '@/app/fonts';
import Link from 'next/link';

// --- Icon components ---
const DiscoveryIcon = () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);
const PrototypeIcon = () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.953 14.953 0 00-5.84-2.56m0 0a14.953 14.953 0 01-5.84 2.56m5.84-2.56V4.72a6 6 0 0111.68 0v1.25m-11.68 0a6 6 0 00-5.84 7.38m5.84-7.38l-5.84 7.38" />
    </svg>
);
const PoCIcon = () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const icons = { discovery: <DiscoveryIcon />, prototype: <PrototypeIcon />, poc: <PoCIcon /> };
type Package = {
  icon: keyof typeof icons;
  title: string;
  duration: string;
  description: string;
  subtext: string;
};
type PackagesProps = {
  title?: string;
  subtitle?: string;
  packages?: Package[];
  ctaText?: string;
  ctaLink?: string;
};

export default function PackagesSection({
  title = "Pick Your Sprint, Fuel Your Progress",
  subtitle = "Choose the right sprint tier for your project needs, from initial discovery to fully functioning proof of concept.",
  packages = [
    { icon: 'discovery', title: 'Discovery Sprint', duration: '1-2 weeks', description: 'Validate ideas and define project scope through research and strategic planning.', subtext: '3 specialised packages available' },
    { icon: 'prototype', title: 'Prototype Sprint', duration: '2-4 weeks', description: 'Build interactive prototypes and test the experience with target users.', subtext: '5 specialised packages available' },
    { icon: 'poc', title: 'PoC Sprint', duration: '4-8 weeks', description: 'Develop a fully functioning proof of concept tested with real users.', subtext: '2 specialised packages available' },
  ],
  ctaText = "Explore All Packages",
  ctaLink = "/packages",
}: PackagesProps) {
  return (
    <div className="bg-black text-white py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`${poppins.className} text-4xl md:text-5xl font-bold`}>{title}</h2>
          <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
        </motion.div>

      
        <motion.div 
          className="mt-20 flex flex-wrap justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          variants={{ hidden: {}, visible: {} }}
        >
          {packages.map((pkg) => (
            <motion.div 
              key={pkg.title}
              // Added a width to the cards so they know how to wrap
              className="w-full sm:w-96 p-8 rounded-2xl bg-brand-light-dark/30 border border-white/10 hover:border-brand-blue/70 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,163,255,0.25)] flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="relative h-14 w-14 mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue to-brand-green rounded-full blur-xl opacity-50"></div>
                <div className="relative h-full w-full bg-brand-light-dark rounded-full flex items-center justify-center border border-white/10">
                  {icons[pkg.icon]}
                </div>
              </div>
              
              <h3 className={`${poppins.className} text-xl font-bold text-white`}>{pkg.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{pkg.duration}</p>
              <p className="mt-6 text-gray-300 flex-grow">{pkg.description}</p>
              <p className="mt-8 text-xs text-brand-green font-semibold uppercase tracking-wider">{pkg.subtext}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <Link 
            href={ctaLink}
            className="inline-block bg-gradient-to-r from-brand-blue to-brand-green text-black px-8 py-3 rounded-lg font-bold hover:brightness-125 hover:shadow-[0_0_25px_rgba(44,255,139,0.4)] transition-all duration-300"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
