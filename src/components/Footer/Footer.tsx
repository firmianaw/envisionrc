import { HiOutlineExternalLink } from 'react-icons/hi';
import { links } from '../../data/links';
import Link from "next/link";
import { FaDiscord, FaInstagram, FaSlack } from 'react-icons/fa';

export default function Footer() {
    const aboutUsLinks = links.find((section) => section.name === "About Us");
    const competeLinks = links.find((section) => section.name === "Compete");
    const winnersLinks = links.find((section) => section.name === "Winners");

    return (
        <div className="bg-lightPurple xl:px-64 px-6 py-8">
            <div className="flex md:space-x-32 md:flex-row flex-col pb-4">
                <div className='flex flex-col md:pb-0 pb-4'>
                    <ul className='md:pb-8'>
                        <li>
                            <p className="font-bold pb-2">About Us</p> 
                        </li>
                        {aboutUsLinks?.items.map((item) => (
                        <li key={item.key} className="pb-1">
                            <div key={item.key} className="flex flex-row items-center space-x-1">
                                <Link 
                                    href={`/about-us/${item.key}`}
                                    className='hover:underline  underline-offset-4'
                                >
                                    {item.label}
                                </Link>
                                <div>
                                    {item.key === 'merchandise' ? <HiOutlineExternalLink /> : ''}
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    <Link href="/competition-portal" className='hover:underline underline-offset-4 pb-1'>
                        Competition Portal
                    </Link>
                    <div className="flex flex-row items-center space-x-1 pb-2">
                        <div>
                            <Link href="https://forms.gle/hihMCRPZfLsJcNfY6" target='_blank' className='hover:underline underline-offset-4 pb-2'>
                                Newsletter Sign-Up
                            </Link>
                        </div>
                        <div>
                            <HiOutlineExternalLink />
                        </div>
                    </div>
                    <div className="space-x-4 flex flex-row items-center pb-2">
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
                </div>
                <div className='flex flex-col md:pb-0 pb-4'>
                    <ul>
                        <li>
                            <p className="font-bold pb-2">Compete</p> 
                        </li>
                        {competeLinks?.items.map((item) => (
                        <li key={item.key} className="pb-1">
                            <Link 
                                href={`/compete/${item.key}`}
                                className='hover:underline  underline-offset-4'
                            >
                                {item.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <ul>
                        <li>
                            <p className="font-bold pb-2">Winners</p> 
                        </li>
                        {winnersLinks?.items.map((item) => (
                        <li key={item.key} className="pb-1">
                            <Link 
                                href={`/winners/${item.key}`}
                                className='hover:underline  underline-offset-4'
                            >
                                {item.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <p className='text-sm'>
                © 2025 ENVISION Research Competition. All Rights Reserved.
            </p>
        </div>
    );
}