// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { poppins } from '@/app/fonts';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- The array of background images for the slideshow ---
// const images = [
//   // '/images/hero/moonshot1.jpeg',
//   '/images/hero/moonshot2.jpeg',
//   '/images/hero/moonshot3.jpeg',
// ];

// // --- PROPS ---
// type HeroProps = {
//   headlinePart1?: string;
//   headlineHighlight?: string;
//   subheadline?: string;
//   primaryCtaText?: string;
//   primaryCtaLink?: string;
//   secondaryCtaText?: string;
//   secondaryCtaLink?: string;
// };

// // // --- ANIMATION VARIANTS ---
// // const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
// // const itemVariants = {
// //   hidden: { y: 20, opacity: 0 },
// //   visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
// // };

// export default function Hero({
//   headlinePart1 = "Light the Way",
//   headlineHighlight = "to Your Next Moonshot",
//   subheadline = "We specialise in short burst collaborations that harness design thinking, AI integration, and Web 3.0 to power your next giant leap in digital innovation.",
//   primaryCtaText = "View Sprint Packages",
//   primaryCtaLink = "/packages",
//   secondaryCtaText = "Our Expertise",
//   secondaryCtaLink = "/expertise",
// }: HeroProps) {
//   // --- State and effect hooks to manage the changing images ---
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 7000); // Change image every 7 seconds

//     return () => clearInterval(timer); 
//   }, []);

//   return (
//     <div className="relative isolate overflow-hidden h-screen min-h-[700px] flex items-center justify-center bg-brand-dark">
      

//       <AnimatePresence>
//         <motion.div
//           key={currentImage}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } }}
//           exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
//           className="absolute inset-0 -z-10"
//         >
//           <Image
//             src={images[currentImage]}
//             alt="Abstract background"
//             layout="fill"
//             objectFit="cover"
//             priority
//           />
//         </motion.div>
//       </AnimatePresence>
//       <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent -z-10"></div>

//       <motion.div 
//         className="max-w-4xl mx-auto px-6 text-center"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: {}
//         }}
//       >
//         <motion.h1 
//           className={`${poppins.className} text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg`}
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//           }}
//         >
//           {headlinePart1}{' '}
//           <span className="text-brand-blue">
//             {headlineHighlight}
//           </span>
//         </motion.h1>

//         <motion.p 
//           className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 drop-shadow-md"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//           }}
//         >
//           {subheadline}
//         </motion.p>

//         <motion.div 
//           className="mt-10 flex justify-center items-center gap-4"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//           }}
//         >
//           <Link 
//             href={primaryCtaLink}
//             className="inline-flex items-center gap-2 bg-[#2D7594] text-white px-7 py-3 rounded-lg font-bold hover:bg-[#00ff88] hover:text-black brightness-110 transition-all duration-300 shadow-lg"
//           >
//             {primaryCtaText}
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//             </svg>
//           </Link>
//           <Link 
//             href={secondaryCtaLink} 
//             className="bg-brand-light-dark/50 backdrop-blur-sm text-white px-6 py-2.5 rounded-md font-bold border border-white/10 hover:bg-white/20 transition-colors duration-300"
//           >
//             {secondaryCtaText}
//           </Link>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }