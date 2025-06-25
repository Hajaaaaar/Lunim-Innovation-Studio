
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { poppins } from '@/app/fonts';

type PageHeaderProps = {
  title?: string;
  subtitle?: string;
};


const images = [
  '/images/hero/hero-1.png',
  '/images/hero/hero-2.png',
  '/images/hero/hero-3.png',
];

export default function PageHeader({
  title = "About Lunim",
  subtitle = "The story behind our passion for innovation and design.",
}: PageHeaderProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Handles the automatic image changing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Image Slideshow using AnimatePresence */}
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
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>
      
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className={`${poppins.className} text-4xl md:text-5xl font-bold text-white drop-shadow-md`}>
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}