import SideNavbar from '@/components/SideNavbar/SideNavbar';
import React from 'react';
import { ReactNode } from 'react';

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  const aboutUsLinks = [
    "Mission",
    "Privacy Policy",
    "Partnership with Harvard GAMI",
    "Organization Partners",
    "Corporate Partners",
    "Merchandise"
  ];
  return (
    <div>
      <div className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(/about-us-header.jpeg)' }}>
      </div>
      <div className='xl:py-16 py-8 xl:px-64 px-6 flex lg:flex-row lg:space-x-24 flex-col'>
        <div className='lg:pb-0 pb-8'>
          <SideNavbar section="About Us" links={aboutUsLinks} />
        </div>

        <div>
        <p className="text-lg text-neutral-400 font-medium">
          About Us
        </p>
        {children}
        </div>
      </div>
    </div>  
  );
};