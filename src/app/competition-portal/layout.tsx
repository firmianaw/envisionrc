import React from 'react';
import { ReactNode } from 'react';

export default function CompetitionPortalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
        <div className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(/competition-portal-header.jpg)' }}>
        </div>
      <div className='xl:py-16 py-8 xl:px-64 px-6'>
        <div>
        {children}
        </div>
      </div>
    </div>  
  );
};