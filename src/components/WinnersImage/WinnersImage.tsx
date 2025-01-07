'use client';

import { Image } from "@nextui-org/react";

type Props = {
    src: string;
};

export default function WinnersImage( {src}: Props ) {
    return (
        <Image 
            src={src} 
            alt='winner image' 
            className="z-0 rounded-xl drop-shadow-xl md:h-60" 
        />
    );
}