'use client';

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function ConditionalGTM() {
    const pathname = usePathname();
    const shouldLoadGTM = ['/','/competition-portal', '/compete/entry-requirements'].includes(pathname);
    
    if (!shouldLoadGTM) return null; 

    return (
        <>
            <Script 
            strategy="afterInteractive" 
            src="https://www.googletagmanager.com/gtag/js?id=AW-11533371948" 
            async
            />
            <Script 
                id='google-analytics'
                strategy="afterInteractive" 
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-11533371948');
                `,
                }}
            />
        </>
    );
}