
'use client';

import { motion } from 'framer-motion';
import { poppins } from '@/app/fonts';
import { useState, MouseEvent } from 'react';


const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-indigo-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);
type Step = {
  stepNumber: string;
  stepTitle: string;
  description: string;
};
type OurProcessProps = {
  title?: string;
  steps?: Step[];
};

export default function OurProcess({
  title = "Our Blueprint for Success",
  steps = [
    { stepNumber: '01', stepTitle: 'Discovery & Strategy', description: 'We start by diving deep into your business goals, target audience, and challenges to build a strategic foundation.' },
    { stepNumber: '02', stepTitle: 'Design & Prototyping', description: 'Our team designs a beautiful, user-centric interface, creating interactive prototypes to refine the experience.' },
    { stepNumber: '03', stepTitle: 'Development & Testing', description: 'We bring the designs to life with clean, efficient code, followed by rigorous testing to ensure a flawless final product.' },
    { stepNumber: '04', stepTitle: 'Launch & Grow', description: 'We handle the deployment and continue to partner with you post-launch to analyze performance and drive growth.' },
  ],
}: OurProcessProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white pt-20 pb-12">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        
        <motion.div 
            className="text-center"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
        >
          <h2 className={`${poppins.className} text-3xl font-bold text-gray-900`}>
            {title}
          </h2>
        </motion.div>

        <div 
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.stepNumber} 
              className="relative p-6 rounded-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              <div 
                className={`absolute inset-0 bg-slate-50 rounded-xl border border-slate-200 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              ></div>

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-300">{step.stepNumber}</span>
                  <h3 className="text-lg font-bold text-gray-900">{step.stepTitle}</h3>
                </div>
                <p className="mt-4 text-base text-gray-600">{step.description}</p>
              </div>

              <div className={`absolute top-1/2 -right-4 -translate-y-1/2 transition-opacity duration-300 hidden lg:block ${hoveredIndex === index && index < steps.length - 1 ? 'opacity-100' : 'opacity-0'}`}>
                <ArrowIcon />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}