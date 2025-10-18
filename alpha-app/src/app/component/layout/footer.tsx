import React from "react";
import Wrapper from "@/src/shared/wrapper";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200">
            <Wrapper>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                    {/* left with logo*/}
                    <div className="space-y-4">
                        <Link className='hover:text-teal-700 duration-300' href="/"><Image src={logo} alt="panaverse dao" width={150} height={50} /></Link>
                        <p className="text-slate-600 text-sm leading-relaxed">Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
                        
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <Link href="https://facebook.com" className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition duration-300">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m287 456.768v-299.781h84.687l12.624-98.235h-97.311v-62.719c0-28.438 7.898-47.816 48.666-47.816l52.034-.224v-87.885c-9.003-1.191-39.906-3.876-75.814-3.876-75.017 0-126.391 45.801-126.391 129.854v72.466h-84.817v98.235h84.817v299.781z"/>
                                </svg>
                            </Link>
                            
                            {/* GitHub */}
                            <Link href="https://github.com" className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition duration-300">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01105.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
                                </svg>
                            </Link>
                            
                            {/* Twitter */}
                            <Link href="https://twitter.com" className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition duration-300">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    {/* middle */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Programs</h3>
                        <ul className="space-y-2">
                            <li><Link href="/programs/web-3" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Web 3.0 and Metaverse Developer</Link></li>
                            <li><Link href="/programs/metaverse" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Artificial Intelligence</Link></li>
                            <li><Link href="/programs/blockchain" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Cloud-Native Computing</Link></li>
                            <li><Link href="/programs/blockchain" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Ambient Computing and IoT</Link></li>
                            <li><Link href="/programs/blockchain" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Genomics and Bioinformatics</Link></li>
                            <li><Link href="/programs/blockchain" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Network Programmability and Automation</Link></li>
                        </ul>
                    </div>
                    {/* right */}
                    <div className="space-y-4"> 
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Pages</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Home</Link></li>
                            <li><Link href="/quarter-1" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Quarter 1</Link></li>
                            <li><Link href="/quarter-2" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Quarter 2</Link></li>
                            <li><Link href="/quarter-3" className="text-slate-600 hover:text-teal-700 duration-300 text-sm">Quarter 3</Link></li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
};

export default Footer;