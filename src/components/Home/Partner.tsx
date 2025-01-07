'use client';

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Partner() {
    return (
        <div className='relative z-0 xl:py-16 py-8 xl:px-64 px-6'>
            <p className='text-xl text-neutral-400 font-medium'>
                JOIN ENVISION
            </p>
            <p className='text-4xl font-extrabold bg-gradient-to-r from-[#F09273] via-[#F0739B] to-[#671D7A] bg-clip-text text-transparent'>
                Partner 
            </p>
            <p className='text-4xl font-extrabold'>
                with ENVISION
            </p>
            <p className='pb-8 pt-4'>
                Annually, nonprofit organizations, companies and foundations, and high schools partner with ENVISION for interactive events and immersive experiences.
            </p>
            <div className="flex flex-col space-y-2">
                <Button 
                    size="md" 
                    radius="md"
                    className="font-bold w-44 bg-lightPurple"
                >
                    <Link href='/about-us/corporate-partners'>
                    Sponsor ENVISION
                    </Link>
                </Button>
                <Button 
                        size="md" 
                        radius="md"
                        className="font-bold w-52 bg-purple text-white"
                    >
                        <Link href='/about-us/organization-partners'>
                        Partner with ENVISION
                        </Link>
                </Button>
            </div>
        </div>
    );
}