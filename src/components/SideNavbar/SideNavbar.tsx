'use client';

import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

interface SidebarProps {
    section: string,
    links: string[];
}

export default function SideNavbar( {section, links}: SidebarProps ) {

  return (
    <div className="self-start sticky top-48 rounded-xl lg:w-56 w-full drop-shadow-xl border border-neutral-100 bg-white bg-opacity-95 px-2 pt-4 pb-2">
      <p className="font-bold pb-2 px-2">{section}</p>

      {links.map((link, index) => (
        <div key={index} className="transition ease-in-out delay-20 hover:bg-neutral-200 rounded-md px-2 py-1">
          <Link 
            href={link !== 'Merchandise' ? `/${section.toLowerCase().replace(/\s+/g, '-')}/${link.toLowerCase().replace(/\s+/g, '-')}` : 'https://my-store-c988a7.creator-spring.com/'}
            target={link !== 'Merchandise' ? '' : '_blank'}
            >
          
          <div className="flex flex-row items-center space-x-1">
            <div>
              {link}
            </div>
            <div>
              {link === 'Merchandise' ? <HiOutlineExternalLink /> : ''}
            </div>
          </div>
          
          </Link>
        </div>
      ))}
    </div>
  );
}