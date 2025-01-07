'use client';

import { Image } from "@nextui-org/react";

export default function Map() {
    return (
        <div className='relative z-0 bg-neutral-50 xl:py-16 py-8 xl:px-64 px-6'>
            <p className='text-xl text-neutral-400 font-medium'>
                WHERE IS ENVISION?
            </p>
            <p className='text-4xl font-extrabold bg-gradient-to-r from-[#F09273] via-[#F0739B] to-[#671D7A] bg-clip-text text-transparent'>
                Hundreds of teams
            </p>
            <p className='text-4xl font-extrabold'>
                from dozens of countries
            </p>

            <p className='pb-8 pt-4'>
                ENVISION is open to students internationally. Students do not have to attend the same school, be in the same grade level, or live in the same region to compete. 
            </p>

            <div className='flex flex-row space-x-16'>
                <div className='flex w-full'>
                    <Image 
                        src='/map.png' 
                        alt='map of entrants'
                        className='rounded-xl drop-shadow-xl'
                    />
                </div>
            </div>
        </div>
    );
}