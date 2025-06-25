'use client';

import { motion } from 'framer-motion';
import { poppins } from '@/app/fonts';
import { useRef, MouseEvent } from 'react';

// --- (Icon components, props, and variants are unchanged) ---
const DesignIcon = () => (
    <div className="h-12 w-12 bg-indigo-100 flex items-center justify-center rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.228-.022.454-.035.684-.035a1.5 1.5 0 011.5 1.5v5.714c0 .54-.224 1.04-.596 1.41l-1.099 1.099m0 0l-2.17 2.17m2.17-2.17c.204.203.438.384.68.542a3 3 0 01-4.242 0c.242-.158.476-.339.68-.542m-2.17 2.17a3 3 0 01-4.242 0m4.242 0L5 14.5M14.25 3.104v5.714c0 .539.224 1.04.596 1.41l1.099 1.099m0 0l2.17 2.17m-2.17-2.17a3 3 0 004.242 0c-.242-.158-.476-.339-.68-.542m2.17 2.17a3 3 0 004.242 0m-4.242 0l1.099-1.099m-5.344 9.352a3 3 0 01-4.242 0L5 14.5" />
        </svg>
    </div>
);
const DevelopmentIcon = () => (
    <div className="h-12 w-12 bg-indigo-100 flex items-center justify-center rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
    </div>
);
const StrategyIcon = () => (
    <div className="h-12 w-12 bg-indigo-100 flex items-center justify-center rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" />
        </svg>
    </div>
);
const icons = { design: <DesignIcon />, development: <DevelopmentIcon />, strategy: <StrategyIcon /> };
type Service = { icon: keyof typeof icons; serviceTitle: string; description: string; };
type ServicesProps = { title?: string; services?: Service[]; };
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

export default function Services({
  title = "A new kind of creative partner",
  services = [
    { icon: 'design', serviceTitle: 'UI/UX Design', description: 'We create intuitive and beautiful user interfaces that are a joy to use, ensuring a seamless user experience.' },
    { icon: 'development', serviceTitle: 'Web Development', description: 'From lightning-fast websites to complex web applications, we build robust digital products using modern technology.' },
    { icon: 'strategy', serviceTitle: 'Brand Strategy', description: 'We help you define your brand’s voice and digital strategy to connect with your audience in a meaningful way.' },
  ],
}: ServicesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      className="bg-white pt-20 pb-12 relative isolate" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="pointer-events-none absolute -inset-px rounded-xl transition-all duration-300"
        style={{
            background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(0, 0, 0, 0.04), transparent 80%)`,
        }}
      />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className={`${poppins.className} text-4xl font-bold text-gray-900`}>
            {title}
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div 
              key={service.serviceTitle} 
              // This is the line we changed for the new shadow effect
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                {icons[service.icon]}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{service.serviceTitle}</h3>
              <p className="mt-3 text-base text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}