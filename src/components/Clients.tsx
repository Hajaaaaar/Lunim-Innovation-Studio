'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppins } from '@/app/fonts';

type Logo = { image: string; name: string };
type ClientsProps = { title?: string; logos?: Logo[] };

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
  const extendedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          
          className={`${poppins.className} text-center text-lg font-medium text-gray-400 mb-12`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        
        
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-10 flex justify-center items-center" style={{ minWidth: '160px' }}>
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={140}
                  height={40}
                  className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 scale-90 hover:scale-100 transition-all duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
