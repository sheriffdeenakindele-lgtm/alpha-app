import React from 'react';
import Image from 'next/image';
import Wrapper from '../../../shared/wrapper';
import Link from 'next/link';


const Header = () => {
    return (
        <header className='h-auto z-20 sticky inset-0 backdrop-blur-md py-3 bg-white bg-opacity-90'>
            <Wrapper>
                <div className='flex justify-between py-5 items-center'>


                    {/*logo here */}
                    <div>
                        <Link className='hover:text-teal-700 duration-300' href="/"><Image src="/logo.png" alt="panaverse dao" width={150} height={50} /></Link>


                    </div>

                    {/* navigation bar*/}

                    <ul className="flex h-full item-center duration-300 gap-x-8 text-16">
                        <li className="relative group cursor-pointer hover:text-teal-700">
                            <div className="flex gap-x-2 items-center">
                                <p>courses</p>
                                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" className="h-3 w-3 text-gray-700 group-hover:text-teal-700 mt-0.5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.55554L4.5 5.44443L8 1.55554" stroke="black" strokeWidth="2" />
                                </svg>
                            </div>
                        </li>
                        <Link className='hover:text-teal-700 duration-300' href="/blogs"><li>Blogs</li></Link>
                        <Link className='hover:text-teal-700 duration-300' href="/videos"><li>Videos</li></Link>
                    </ul>


                </div>
            </Wrapper>
        </header>
    );
};

export default Header;

