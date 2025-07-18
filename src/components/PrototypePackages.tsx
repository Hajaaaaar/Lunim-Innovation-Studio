'use client';

import { motion } from 'framer-motion';
const poppins = { className: 'font-sans' }; 
import Link from 'next/link';

// --- Custom Icons ---
const CreativeIcon = () => (
    <svg className="w-8 h-8 text-yellow-500 transition-colors duration-300 group-hover:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13l.648 1.938a3.375 3.375 0 002.456 2.456l1.938.648-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);
const AiIcon = () => (
    <svg className="w-8 h-8 text-red-500 transition-colors duration-300 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12v1.5m15-1.5v1.5m-15 3.75H3m18 0h-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
);
const Web3Icon = () => (
    <svg className="w-8 h-8 text-pink-500 transition-colors duration-300 group-hover:text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0-2.25l2.25 1.313M12 12.75l-2.25 1.313M9.75 15.75l-2.25-1.313M9.75 15.75v2.25m2.25-4.5l-2.25 1.313M14.25 15.75l2.25-1.313M14.25 15.75v2.25M5.25 9.75l2.25 1.313M5.25 9.75v2.25m13.5-2.25l-2.25 1.313M18.75 9.75v2.25" />
    </svg>
);
const CheckIcon = () => (
    <svg className="w-5 h-5 text-brand-green transition-colors duration-300 group-hover:text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const PrototypeIcon = () => (
  <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.953 14.953 0 00-5.84-2.56m0 0a14.953 14.953 0 01-5.84 2.56m5.84-2.56V4.72a6 6 0 0111.68 0v1.25m-11.68 0a6 6 0 00-5.84 7.38m5.84-7.38l-5.84 7.38" />
  </svg>
);

const icons = { ux: <CreativeIcon />, ai: <AiIcon />, web3: <Web3Icon /> };


type PackageDetail = {
  icon: keyof typeof icons;
  title: string;
  duration: string;
  tags: (string | { tag: string })[];
  features: string | string[];
};
type PrototypePackagesProps = {
  title?: string;
  packages?: PackageDetail[];
};

export default function PrototypePackages({
  title = "Prototype Sprints", 
  packages = [
    { icon: 'ux', title: 'UX Prototype Sprint', duration: '3 weeks', tags: ['UX', 'Design', 'Research'], features: ['Interactive wireframe creation', 'User journey mapping', 'Prototype development', 'Usability testing sessions', 'Design system foundation'] },
    { icon: 'ai', title: 'AI-Powered Prototype', duration: '4 weeks', tags: ['AI', 'ML', 'Data'], features: ['Develop intelligent prototypes', 'ML model development', 'AI feature integration', 'Data pipeline setup', 'Algorithm optimization', 'Performance testing'] },
    { icon: 'web3', title: 'Web3 dApp Prototype', duration: '4 weeks', tags: ['Web3', 'Blockchain', 'dApp'], features: ['Create decentralized application prototypes', 'Smart contract prototyping', 'Blockchain integration', 'Wallet connectivity', 'Token functionality', 'Security audit preparation'] },
  ],
}: PrototypePackagesProps) {
  return (
    <div className="bg-black text-white pt-12 pb-24 sm:pt-16 sm:pb-32 relative">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="flex flex-col items-center text-center mb-16">
            <div className="p-4 bg-brand-light-dark/50 rounded-full border border-white/10 shadow-[0_0_20px_5px] shadow-red-500/70 mb-4">
                <PrototypeIcon />
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
                <div className="flex items-start justify-between">
                  {icons[pkg.icon]}
                  <span className="text-sm font-semibold text-gray-400 transition-colors duration-300 group-hover:text-brand-dark">{pkg.duration}</span>
                </div>
                <h3 className={`${poppins.className} text-2xl font-bold mt-4 transition-colors duration-300 group-hover:text-brand-dark`}>{pkg.title}</h3>
                
                <div className="flex flex-wrap gap-2 my-4">
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
