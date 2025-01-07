'use client';

import Partners from "@/components/Partners/Partners";
import Link from "next/link";


export default function OrganizationPartners() {
    return (
        <div>
            <p className="text-4xl font-extrabold pb-4">
                Organization Partners
            </p>
            <p className="pb-2">
                ENVISION Research Competition collaborates with other organizations with common goals to achieve greater impact with its initiatives and mission. Organization partners have collaborated with ENVISION to create numerous inclusivity and diversity campaigns, host conferences and workshops, and run mutual promotions of their work.
            </p>
            <p className="pb-2">
                To learn more about becoming an organization partner and the benefits of partnering with ENVISION, please contact 
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
                Featured Organization Partners
            </p>
            
            <Partners partnerType="organizationPartners"/>
        </div>
    );
}