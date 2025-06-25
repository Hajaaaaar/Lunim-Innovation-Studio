'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppins } from '@/app/fonts';

type Logo = { image: string; name: string };
type ClientsProps = { title?: string; logos?: Logo[] };
const titleVariant = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } };

export default function Clients({
  title = "Trusted by the world's most innovative companies",
  logos = [
    { image: '/images/clients/blue-moon.png', name: 'Blue moon - independent short film screenings' },
    { image: '/images/clients/bath-spa-uni.png', name: 'Bath Spa University' },
    { image: '/images/clients/the-architect-banner.png', name: 'The Architect Cafe-Bar' },
    { image: '/images/clients/bristol-old-vic-theatre-school.png', name: 'Bristol Old Vic Theatre School' },
    { image: '/images/clients/bristol-production-van.png', name: 'Bristol Production Van' },
  ],
}: ClientsProps) {
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="py-7 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className={`${poppins.className} text-center text-2xl font-semibold text-gray-500 mb-12`}
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex justify-center items-center" style={{ minWidth: '160px' }}>
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={158}
                  height={48}
                  className="opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}