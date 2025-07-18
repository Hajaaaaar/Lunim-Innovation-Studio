'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


const CheckIcon = () => (
    <svg className="w-5 h-5 text-brand-green transition-colors duration-300 group-hover:text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

// --- Section Icon ---
const DiscoverySectionIcon = () => (
    <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

// --- Individual Package Icons ---
const UserResearchIcon = () => (
    <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);
const MarketValidationIcon = () => (
    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
);
const TechFeasibilityIcon = () => (
    <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-1.731.678-3.322 1.897-4.525a1.5 1.5 0 012.121 2.121A6.01 6.01 0 0015 9.75a6.01 6.01 0 004.025 5.603 1.5 1.5 0 01-2.121 2.121c-1.203-1.203-1.897-2.794-1.897-4.525z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12.75c0-1.731-.678-3.322-1.897-4.525a1.5 1.5 0 00-2.121 2.121A6.01 6.01 0 019 15.75a6.01 6.01 0 01-4.025 5.603 1.5 1.5 0 002.121 2.121c1.203-1.203 1.897-2.794 1.897-4.525z" />
    </svg>
);

const packageIcons = { research: <UserResearchIcon />, market: <MarketValidationIcon />, tech: <TechFeasibilityIcon /> };

// --- TYPE DEFINITIONS ---
type DiscoveryPackageDetail = {
  icon: keyof typeof packageIcons;
  title: string;
  duration: string;
  tags: (string | { tag: string })[];
  features: string | string[];
};
type DiscoveryPackagesProps = {
  title?: string;
  packages?: DiscoveryPackageDetail[];
};

export default function DiscoveryPackages({
  title = "Discovery Sprints",
  packages = [
    { 
        icon: 'research',
        title: 'User Research Sprint', 
        duration: '1-2 weeks', 
        tags: ['Research', 'UX', 'Strategy'],
        features: ['User interviews & surveys', 'Persona & empathy mapping', 'Competitive analysis', 'Problem validation'] 
    },
    { 
        icon: 'market',
        title: 'Market Validation Sprint', 
        duration: '1-2 weeks', 
        tags: ['Business', 'Strategy', 'Data'],
        features: ['Value proposition design', 'Landing page testing', 'Market sizing & analysis', 'Go-to-market strategy'] 
    },
    { 
        icon: 'tech',
        title: 'Technical Feasibility Sprint', 
        duration: '1-2 weeks', 
        tags: ['Tech', 'Architecture', 'Risk'],
        features: ['Proof of concept development', 'API & integration planning', 'Tech stack evaluation', 'Effort & cost estimation'] 
    },
  ],
}: DiscoveryPackagesProps) {
  return (
    <div className="bg-black text-white pt-12 pb-24 sm:pt-16 sm:pb-32 relative">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="flex flex-col items-center text-center mb-16">
            <div className="p-3 bg-brand-light-dark/50 rounded-full border border-white/10 shadow-[0_0_20px_5px] shadow-cyan-500/50 mb-4">
                <DiscoverySectionIcon />
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
