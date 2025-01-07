import {Button, Image, Popover, PopoverTrigger, PopoverContent, Navbar, NavbarMenuToggle, NavbarContent, NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { HiChevronDown, HiOutlineExternalLink } from "react-icons/hi";

import SecondaryNavbar from "./SecondaryNavbar";
import { links } from '../../data/links';
import Link from "next/link";
import { useState } from "react";

export const ENVISIONLogo = () => {
    return (
        <Image src="/envision-logo-transparent.png" width={50} alt="ENVISION logo" />    
    );
};
  
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-20">
            
            <SecondaryNavbar /> 
            <Navbar 
                onMenuOpenChange={setIsMenuOpen} 
                className="border-b border-neutral-200 bg-white bg-opacity-95 xl:px-56"
                isBordered
                isMenuOpen={isMenuOpen}
                maxWidth="full"
            >
                <NavbarContent>
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                    />
                    <Link href='/'>
                        <NavbarBrand className="items-center space-x-3">
                            <ENVISIONLogo />
                            <p className="font-bold font-black text-lg">ENVISION</p>
                        </NavbarBrand>
                    </Link>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    {links.map((dropdown) => (
                        <NavbarItem key={dropdown.name}>
                            <Popover>
                                <PopoverTrigger>
                                    <Button
                                        className="bg-transparent data-[hover=true]:bg-transparent text-md"
                                        radius="sm"
                                        variant="light"
                                    >   
                                        {dropdown.name}
                                        <HiChevronDown className="text-black" />
                                    </Button>
                                </PopoverTrigger>
            
                                <PopoverContent className="rounded-xl w-56 bg-opacity-95 drop-shadow-xl border border-neutral-100 bg-white p-2 pb-2 text-md">
                                    {dropdown.items.map((item) => (
                                    <div key={item.key} className="w-full text-left transition ease-in-out delay-20 hover:bg-neutral-200 rounded-md px-2 py-1">
                                        <div className="flex flex-row items-center space-x-1">
                                            <Link href={`/${dropdown.name.toLowerCase().replace(/\s+/g, '-')}/${item.key}`}>{item.label}</Link>
                                            <div>
                                                {item.key === 'merchandise' ? <HiOutlineExternalLink /> : ''}
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </PopoverContent>
                            </Popover>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarMenu className="mt-10 bg-white bg-opacity-95">
                    {links.map((dropdown, index) => (
                    <NavbarMenuItem key={`${dropdown}-${index}`}>
                        <b>{dropdown.name}</b>
                        {dropdown.items.map((item) => (
                            <div key={item.key} className="w-full hover:underline underline-offset-4 py-1">
                                <div className="flex flex-row items-center space-x-1">
                                    <Link 
                                    href={item.key !== "merchandise" ? `/${dropdown.name.toLowerCase().replace(/\s+/g, '-')}/${item.key}` : 'https://my-store-c988a7.creator-spring.com/'}
                                    target={item.key !== 'merchandise' ? '' : '_blank'}
                                    onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    <div>
                                        {item.key === 'merchandise' ? <HiOutlineExternalLink /> : ''}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}