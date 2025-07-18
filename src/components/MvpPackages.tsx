'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// --- Re-using CheckIcon from the previous component ---
const CheckIcon = () => (
    <svg className="w-5 h-5 text-brand-green transition-colors duration-300 group-hover:text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

// --- Section Icon ---
const MvpSectionIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="mvpIconGradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F472B6"/>
                <stop offset="0.5" stopColor="#A78BFA"/>
                <stop offset="1" stopColor="#60A5FA"/>
            </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#mvpIconGradient)"/>
    </svg>
);

// --- CUSTOM ICONS ---
const CreativeSpeechIcon = () => (
    <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.28c-1.131.084-2.057-.772-2.057-1.9v-4.286c0-.97.617-1.813 1.5-2.097m6.022 6.022L16.5 18.25m-6.022-6.022L10.5 6.25m-3.69 3.69L6.25 10.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AiBatteryIcon = () => (
     <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Web3HexagonIcon = () => (
    <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m3-4.5l3 2.25-3 2.25m3-4.5l3 2.25-3 2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const packageIcons = { creativeSpeech: <CreativeSpeechIcon />, aiBattery: <AiBatteryIcon />, web3Hexagon: <Web3HexagonIcon /> };


// --- TYPE DEFINITIONS  ---
type MvpPackageDetail = {
  icon: keyof typeof packageIcons;
  title: string;
  duration: string;
  tags: (string | { tag: string })[];
  features: string | string[];
};
type MvpPackagesProps = {
  title?: string;
  packages?: MvpPackageDetail[];
};

export default function MvpPackages({
  title = "MVP Sprint Packages",
  packages = [
    { 
        icon: 'creativeSpeech',
        title: 'Creative MVP Launch', 
        duration: '6 weeks', 
        tags: ['Creativity', 'UX', 'Sprints'],
        features: ['Full product development', 'Creative asset production', 'User interface implementation', 'Performance optimization', 'Launch strategy execution'] 
    },
    { 
        icon: 'aiBattery',
        title: 'AI-Driven MVP', 
        duration: '8 weeks', 
        tags: ['AI', 'Agile', 'Sprints'],
        features: ['Production ML models', 'Scalable AI infrastructure', 'Real-time analytics', 'User feedback loops', 'Continuous learning setup'] 
    },
    { 
        icon: 'web3Hexagon',
        title: 'Web3 Platform MVP', 
        duration: '8 weeks', 
        tags: ['Web3', 'UX', 'Agile'],
        features: ['Full smart contract deployment', 'Multi-chain compatibility', 'DeFi protocol integration', 'Governance mechanisms', 'Community features'] 
    },
  ],
}: MvpPackagesProps) {
  return (
    <div className="bg-black text-white pt-12 pb-24 sm:pt-16 sm:pb-32 relative">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="flex flex-col items-center text-center mb-16">
            <div className="p-3 bg-brand-light-dark/50 rounded-full border border-white/10 shadow-[0_0_20px_5px] shadow-pink-500/50 mb-4">
                <MvpSectionIcon />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          variants={{ hidden: {}, visible: {} }}
        >
          {packages.map((pkg) => (
            <motion.div 
              key={pkg.title}
              className="relative p-8 rounded-2xl bg-brand-light-dark/30 border border-white/10 group flex flex-col overflow-hidden w-full max-w-sm"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-blue opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-in-out"></div>
              
              <div className="relative flex-grow">
                <div className="flex items-start justify-between mb-4">
                  {packageIcons[pkg.icon]}
                  <span className="text-sm flex-shrink-0 ml-4 font-semibold text-gray-400 transition-colors duration-300 group-hover:text-brand-dark">{pkg.duration}</span>
                </div>
                
                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-brand-dark mt-2 mb-4">{pkg.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {(pkg.tags || []).map((item, index) => {
                        const tagText = typeof item === 'string' ? item : item.tag;
                        return (
                            <span key={`${tagText}-${index}`} className="text-xs font-semibold bg-white/10 text-gray-300 px-2.5 py-1 rounded-full transition-colors duration-300 group-hover:bg-brand-dark/20 group-hover:text-white">
                                {tagText}
                            </span>
                        );
                    })}
                </div>
                
                <ul className="mt-8 space-y-4">
                  {(Array.isArray(pkg.features) ? pkg.features : pkg.features.split('\n')).map((feature, index) => (
                      <li key={`${feature}-${index}`} className="flex items-start gap-3">
                          <div className="mt-1"><CheckIcon /></div>
                          <span className="text-gray-300 transition-colors duration-300 group-hover:text-brand-dark">{feature}</span>
                      </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-10">
                <Link 
                  href="/get-started"
                  className="block w-full text-center bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300 group-hover:bg-brand-dark/20 group-hover:border-brand-dark/30"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
