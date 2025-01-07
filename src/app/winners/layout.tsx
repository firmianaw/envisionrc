import SideNavbar from '@/components/SideNavbar/SideNavbar';
import React from 'react';
import { ReactNode } from 'react';

export default function WinnersLayout({ children }: { children: ReactNode }) {
  const winnersLinks = [
    "2022",
    "2021",
    "Fall 2020",
    "Spring 2020"
  ];
  return (
    <div>
      <div className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(/winners-header.jpeg)' }}>
      </div>
      <div className='xl:py-16 py-8 xl:px-64 px-6 flex lg:flex-row lg:space-x-24 flex-col'>
        <div className='lg:pb-0 pb-8'>
          <SideNavbar section="Winners" links={winnersLinks} />
        </div>

        <div>
          <p className="text-lg text-neutral-400 font-medium">
            Winners
          </p>
          {children}
        </div>
      </div>
    </div>  
  );
};