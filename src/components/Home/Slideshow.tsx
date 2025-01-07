'use client';

import { Image } from "@nextui-org/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomCarousel from '../CustomCarousel/CustomCarousel';
import Link from "next/link";

export default function Slideshow() {
    return (
        <div className='relative z-0 xl:py-16 py-8 xl:px-64 px-6'>
            <p className='text-xl text-neutral-400 font-medium'>
                WHAT IS ENVISION?
            </p>
            <p className='text-4xl font-extrabold bg-gradient-to-r from-[#F09273] via-[#F0739B] to-[#671D7A] bg-clip-text text-transparent'>
                Research from home
            </p>
            <p className='text-4xl font-extrabold'>
                for girls and genderqueer students
            </p>
            <p className='pb-8 pt-4'>
                ENVISION is an annual international research competition for female and genderqueer high school students interested in STEM.
                Students work individually or in groups of up to four members to write a formal research proposal. 
                Besides monetary awards, participating in ENVISION offers numerous benefits including practicing formal scientific writing, literature review, and teamwork and collaboration.
            </p>

            <div className='flex lg:flex-row lg:space-x-8 flex-col pb-8'>
                <div className='flex w-full z-0 justify-center pb-8'>
                    <Image 
                        src='/landing_winner.png' 
                        alt='past participant'
                        className='rounded-xl drop-shadow-xl lg:h-auto h-72'
                    />
                </div>
                
                <div className='flex flex-col w-full justify-start space-y-8'>
                    <div className='flex flex-row space-x-4 w-full'>
                        <div className='relative w-8'>
                            <div className='font-extrabold w-8 h-8 border-3 border-purple text-purple bg-transparent flex items-center justify-center rounded-full'>
                                <p>1</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-extrabold text-lg'>
                                Find a group of up to four students to enter with (or work by yourself).
                            </p>
                            <p className=''>
                                Teams must consist solely of female or genderqueer identifying high school students. 
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-4 w-full'>
                        <div className='relative w-8'>
                            <div className='font-extrabold w-8 h-8 border-3 border-purple text-purple bg-transparent flex items-center justify-center rounded-full'>
                                <p>2</p>
                            </div>
                        </div>
                        <div>
                        <p className='font-extrabold text-lg'>
                            Think of a problem you&apos;d like to solve. Design an experiment that could solve it.
                        </p>
                        <p>
                            Brainstorm ideas by exploring science news, Google Scholar, or open-access journals like PubMed and ArXiv. Refine your topic through reviewing papers to identify challenges or gaps. 
                        </p>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-4 w-full'>
                        <div className='relative w-8'>
                            <div className='font-extrabold w-8 h-8 border-3 border-purple text-purple bg-transparent inline-flex items-center justify-center rounded-full'>
                                <p>3</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-extrabold text-lg'>
                                Write the proposal and submit it through the Competition Portal.
                            </p>
                            <p>
                                Make sure your proposal adheres to all <Link href='/compete/entry-requirements' target='_blank' className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Entry Requirements</Link> before submitting it as a PDF through the <Link href='/competition-portal' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Competition Portal</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CustomCarousel src="/landing-slides/slide" len={10} arrowColor="white" />
        </div>
    );
}