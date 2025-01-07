import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import { partners } from '@/data/partners';  
import { Image } from "@nextui-org/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

interface PartnersProps {
    partnerType: 'organizationPartners' | 'corporatePartners';
  }

export default function Partners( {partnerType}: PartnersProps ) {
    return (
        <div className="flex flex-row flex-wrap space-x-4 z-0">
            {partners[0][partnerType].map((partner) => (
                <Popover key={partner.key}>
                <PopoverTrigger>
                    <Image
                    src={`/${partnerType}/${partner.key}.png`}
                    alt={`${partner.label} logo`}
                    width={128}
                    className="cursor-pointer rounded-md"
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-4">
                    <p className="font-bold">{partner.label}</p>
                    <Link 
                        href={partner.handle !== 'NA' ? `https://www.instagram.com/${partner.handle}` : ''}
                        target="_blank"
                        className='underline underline-offset-4 decoration-solid hover:decoration-wavy'
                    >
                        <div className="flex flex-row items-center space-x-1">
                            <div>
                                {partner.handle !== 'NA' ? `@${partner.handle}` : ''}
                            </div>
                            <div>
                                {partner.handle !== "NA" ? <HiOutlineExternalLink /> : ''}
                            </div>
                        </div>
                    </Link>
                    </div>
                </PopoverContent>
                </Popover>
            ))}
        </div>
    );
}