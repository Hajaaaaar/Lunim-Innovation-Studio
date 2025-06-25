
import './globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; 

export const metadata: Metadata = {
  title: 'Lunim',
  description: 'Lunim Innovation Studio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-white text-black flex flex-col h-full`}>
        <Navbar />
        {/* The 'flex-grow' class makes the main content take up available space */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}