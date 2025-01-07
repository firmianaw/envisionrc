'use client';

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Landing() {
    return (
        <div className="flex bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/landing.jpeg)' }}>
            <div className="m-auto flex flex-col items-center space-y-8 px-6">
                <p 
                className="text-white text-5xl font-extrabold text-center" 
                style={{
                        textShadow: '0px 4px 30px rgba(0, 0, 0, 0.4), 0px 20px 30px rgba(0, 0, 0, 0.4), 0px 4px 30px rgba(0, 0, 0, 0.4)',
                    }}
                >
                    A research proposal <br></br>competition for <br></br>high school students.
                </p>
                <div className="flex flex-col space-y-4 text-center items-center">
                    <Button 
                        size="lg" 
                        radius="lg"
                        className="font-bold w-32 bg-white"
                    >
                        <Link href='/competition-portal'>
                        Submit today
                        </Link>
                    </Button>
                    <Link href="https://forms.gle/hihMCRPZfLsJcNfY6" target="_blank" className="text-white underline underline-offset-4 decoration-solid hover:decoration-wavy">
                        Sign up for reminders
                    </Link>
                </div>
            </div>
        </div>
    );

}