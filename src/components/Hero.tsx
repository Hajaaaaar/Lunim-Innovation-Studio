
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/fonts';
import { motion, AnimatePresence } from 'framer-motion';

// --- (Props) ---
type HeroProps = {
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
};

const images = [
  '/images/hero/hero-1.png',
  '/images/hero/hero-2.png',
  '/images/hero/hero-3.png',
];

export default function Hero({
  headline = "We Build Digital Experiences That Inspire",
  subheadline = "From concept to launch, we partner with innovative brands to create unforgettable websites and applications.",
  primaryCtaText = "Start a Project",
  primaryCtaLink = "/contact",
  secondaryCtaText = "View Our Work",
  secondaryCtaLink = "/our-work",
}: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative isolate overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={images[currentImage]}
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </motion.div>
      </AnimatePresence>
      
      
      <motion.div 
        className="max-w-7xl mx-auto px-6 text-center pt-36 pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        
        <motion.h1 
          className={`${poppins.className} text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-md`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          {headline}
        </motion.h1>

        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 drop-shadow"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          {subheadline}
        </motion.p>

        <motion.div 
          className="mt-10 flex justify-center items-center gap-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <Link href={primaryCtaLink} className="bg-white text-black px-7 py-3.5 rounded-lg font-bold hover:bg-gray-200 transition-colors duration-300">
            {primaryCtaText}
          </Link>
          <Link href={secondaryCtaLink} className="bg-transparent text-white px-7 py-3.5 rounded-lg font-medium border-2 border-white/50 hover:bg-white/10 hover:border-white transition-colors duration-300">
            {secondaryCtaText}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}