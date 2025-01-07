import Link from "next/link";

export default function Portal() {
    return (
        <div>
             <p className="text-4xl font-extrabold pb-8 text-center">
                Competition Portal
            </p>
            <div className="flex justify-center w-full pb-8">
                <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe0hhXc-kNTysoLu0V9QtS25184lVEjqB_P9j2kaPjaJ0KwFw/viewform?embedded=true" 
                        width={840}
                        className="h-screen"
                    >
                        Loading…
                </iframe>
            </div>
            <p className="text-center">
                Not loading? Access the entry submission portal at: <Link href="https://forms.gle/SoRgDTshXBLGJFRZ8" target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>https://forms.gle/n7GPnYhWgB3qc1AS7</Link>
            </p>
        </div>
    );
}