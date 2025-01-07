'use client';

import { Carousel } from 'react-responsive-carousel';
import { Image } from "@nextui-org/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CustomCarouselProps {
    src: string,
    len: number,
    arrowColor: string,
}

export default function CustomCarousel( {src, len, arrowColor}: CustomCarouselProps ) {
    const slides = Array.from({ length: len }, (_, i) => `${src}-${i + 1}.jpg`);
    
    return (
        <Carousel 
            infiniteLoop
            renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                    <button
                    type="button"
                    onClick={onClickHandler}
                    className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-${arrowColor} p-2`}
                    >
                        <HiChevronLeft size={24} />
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                    <button
                    type="button"
                    onClick={onClickHandler}
                    className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-${arrowColor} p-2`}
                    >
                        <HiChevronRight size={24} />
                    </button>
                )
            }
            showStatus={false}
            emulateTouch 
            showThumbs={false}
            className='drop-shadow-xl'
            >
            {slides.map((slide, index) => (
                <div key={index} className=''>
                    <Image
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        width={`100%`}
                        className='rounded-xl'
                    />
                </div>
            ))}
        </Carousel>
    );
}