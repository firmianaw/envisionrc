import SideNavbar from '@/components/SideNavbar/SideNavbar';
import React from 'react';
import { ReactNode } from 'react';

export default function CompeteLayout({ children }: { children: ReactNode }) {
  const competeLinks = [
    "Who Can Compete",
    "How To Compete",
    "Entry Categories",
    "Entry Requirements",
    "Sample Entries",
    "Timeline",
    "Competition Rules",
    "Judging Criteria",
    "Meet the Judges",
    "Awards",
    "Competition FAQs",
  ];
  return (
    <div>
      <div className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(/compete-header.jpg)' }}>
      </div>
      <div className='xl:py-16 py-8 xl:px-64 px-6 flex lg:flex-row lg:space-x-24 flex-col'>
        <div className='lg:pb-0 pb-8'>
          <SideNavbar section="Compete" links={competeLinks} />
        </div>

        <div>
        <p className="text-lg text-neutral-400 font-medium">
          Compete
        </p>
        {children}
        </div>
      </div>
    </div>  
  );
};