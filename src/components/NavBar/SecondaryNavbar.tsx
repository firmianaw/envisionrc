import { FaInstagram, FaDiscord, FaSlack } from "react-icons/fa";
import Link from "next/link";

export default function SecondaryNavbar() {
    return (
        <div className="flex justify-end bg-lightPurple py-2 items-center space-x-4 px-6 xl:px-64">
            <Link href="/competition-portal" className='hover:underline underline-offset-4'>
                Competition Portal
            </Link>
            <Link 
                href="https://www.instagram.com/envision.rc"
                target="_blank"
                className="hover:text-purple"
            >
                <FaInstagram size={16} />
            </Link>
            <Link 
                href="https://discord.gg/F6pkmqwUq7" 
                target="_blank"
                className="hover:text-purple"
            >
                <FaDiscord size={16} />
            </Link>
            <Link 
                href="https://join.slack.com/t/envisionresea-d4v8883/shared_invite/zt-fh2u8so2-jPz5UsfqeqQ4k5urrUfjXw" 
                target="_blank"
                className="hover:text-purple"
            >
                <FaSlack size={16} />
            </Link>
        </div>
    );
}