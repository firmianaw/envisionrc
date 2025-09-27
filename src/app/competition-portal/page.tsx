import Link from "next/link";

export default function Portal() {
    return (
        <div>
             <p className="text-4xl font-extrabold pb-8 text-center">
                Competition Portal
            </p>
            <div className="flex justify-center w-full pb-8">
                <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd5fhWMrPPorUzeP6BJDxRxuA3i7QZN6xKomqPaXEmO26eEaQ/viewform?embedded=true" 
                        width={840}
                        className="h-screen"
                    >
                        Loading…
                </iframe>
            </div>
            <p className="text-center">
                Not loading? Access the entry submission portal at: <Link href="https://forms.gle/KZ33iWrJhJ6uXNpN6" target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>
                    https://forms.gle/KZ33iWrJhJ6uXNpN6
                </Link>
            </p>
        </div>
    );
}