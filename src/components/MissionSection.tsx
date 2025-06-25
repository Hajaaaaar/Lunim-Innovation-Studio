
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppins } from '@/app/fonts';

//  PROPS 
type MissionSectionProps = {
  headline?: string;
  paragraph1?: string;
  paragraph2?: string;
  imageUrl?: string;
};

//  ANIMATION VARIANTS 
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const textCardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
},
};

const blobVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: "easeOut",
        },
    },
};

export default function MissionSection({
  headline = "Our Mission",
  paragraph1 = "At Lunim, our mission is to empower visionaries. We believe that groundbreaking ideas deserve brilliant digital execution. We are more than just a studio; we are partners dedicated to translating your ambition into tangible, impactful, and beautiful digital products.",
  paragraph2 = "We are driven by a passion for clean design, elegant code, and the pursuit of innovation. Our process is collaborative and transparent, ensuring we not only meet but exceed expectations at every stage of the journey.",
  imageUrl = "/images/about/mission.png",
}: MissionSectionProps) {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
      
      <motion.div 
        className="absolute top-1/2 left-full w-[50rem] h-[50rem] -translate-x-1/2 -translate-y-1/2"
        variants={blobVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-indigo-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 items-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div 
          className="z-10"
          variants={textCardVariants}
        >
          <div className="bg-white/60 backdrop-blur-lg p-8 lg:p-12 rounded-2xl shadow-xl border border-white/50">
            <h2 className={`${poppins.className} text-3xl font-bold text-gray-900`}>{headline}</h2>
            <div className="mt-6 space-y-6 text-gray-700 text-lg">
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={imageVariants} 
          className="lg:-ml-24"
        >
          <Image
            src={imageUrl}
            alt="Our Mission"
            width={800}
            height={900}
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}