'use client';

import { usePathname } from "next/navigation";

export default function Title() {
    const pathname = usePathname();
  
    const slug = pathname?.split('/').pop(); 

    const formattedTitle = slug ? slug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ') + ' | ENVISION Research Competition' : 'ENVISION Research Competition';
    return (
        <title>{formattedTitle}</title>
    );
}