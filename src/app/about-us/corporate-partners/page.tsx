'use client';

import Partners from "@/components/Partners/Partners";
import Link from "next/link";

export default function CorporatePartners() {
    return (
        <div>
            <p className="text-4xl font-extrabold pb-4">
                Corporate Partners
            </p>
            <p className="pb-2">
            ENVISION Research Competition&apos;s corporate partners contribute to and support ENVISION in numerous ways, including financially and through gender equity initiatives. In the past, ENVISION’s corporate partners have sponsored ENVISION scholarships and awards, provided free gifts for participants, and lead workshops and conferences on female and genderqueer representation and retention in industrial science.
            </p>
            <p className="pb-2">
                To learn more about becoming a corporate partner and the benefits of partnering with ENVISION, please contact 
                <span className="pl-1">
                    <Link
                    href="mailto:envision@talaria.org"
                    className='underline underline-offset-4 decoration-solid hover:decoration-wavy'
                    >
                        envision@talaria.org.
                    </Link>
                </span>
            </p>
            <p className="text-2xl font-bold pt-4 pb-8">
                Featured Corporate Partners
            </p>
            
            <Partners partnerType="corporatePartners"/>
        </div>
    );
}