'use client';

import { motion } from 'framer-motion';
import { poppins } from '@/app/fonts';

// --- SVG Icons---
const DesignIcon = () => (
    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.228-.022.454-.035.684-.035a1.5 1.5 0 011.5 1.5v5.714c0 .54-.224 1.04-.596 1.41l-1.099 1.099m0 0l-2.17 2.17m2.17-2.17c.204.203.438.384.68-.542a3 3 0 01-4.242 0c.242-.158.476-.339.68-.542m-2.17 2.17a3 3 0 01-4.242 0m4.242 0L5 14.5M14.25 3.104v5.714c0 .539.224 1.04.596 1.41l1.099 1.099m0 0l2.17 2.17m-2.17-2.17a3 3 0 004.242 0c-.242-.158-.476-.339-.68-.542m2.17 2.17a3 3 0 004.242 0m-4.242 0l1.099-1.099m-5.344 9.352a3 3 0 01-4.242 0L5 14.5" />
    </svg>
);
const DevelopmentIcon = () => (
    <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
);
const StrategyIcon = () => (
    <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" />
    </svg>
);

const icons = { design: <DesignIcon />, development: <DevelopmentIcon />, strategy: <StrategyIcon /> };
type Service = { icon: keyof typeof icons; serviceTitle: string; description: string; };
type ServicesProps = { title?: string; services?: Service[]; };

export default function Services({
  title = "A new kind of creative partner",
  services = [
    { icon: 'design', serviceTitle: 'UI/UX Design', description: 'We create intuitive and beautiful user interfaces that are a joy to use, ensuring a seamless user experience.' },
    { icon: 'development', serviceTitle: 'Web Development', description: 'From lightning-fast websites to complex web applications, we build robust digital products.' },
    { icon: 'strategy', serviceTitle: 'Brand Strategy', description: 'We help you define your brand’s voice and digital strategy to connect with your audience in a meaningful way.' },
  ],
}: ServicesProps) {
  return (
    <div className="bg-black text-white sm:py-32">
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`${poppins.className} text-4xl md:text-5xl font-bold`}>{title}</h2>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          variants={{ hidden: {}, visible: {} }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.serviceTitle}
              className="relative p-8 border-b border-r border-white/10 group"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              
              <div className="relative">
                <div className="mb-6">
                  {icons[service.icon]}
                </div>
                
                <h3 className={`${poppins.className} text-xl font-bold text-white`}>{service.serviceTitle}</h3>
                <p className="mt-4 text-base text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
