import Image from "next/image";
import Link from "next/link";

export default function TertiaryNavbar() {
    return (
        <div className="bg-purple text-white py-2 px-6 xl:px-60 text-sm flex items-center gap-2">
            <p>
                ENVISION x <Link
                    href='https://www.harvardgami.com/'
                    target="_blank"
                    className="underline-offset-4 hover:underline"
                >
                    Harvard GAMI
                </Link>
            </p>
            <Image 
                src="/GAMI_logo.png" 
                alt="GAMI Logo" 
                width={16} 
                height={16} 
            /> 
        </div>
    );
}