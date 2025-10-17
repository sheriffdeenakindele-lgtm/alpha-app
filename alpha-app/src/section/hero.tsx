import React from 'react';
import Wrapper from '../shared/wrapper';
import Image from 'next/image';
import heroposter from '../assests/Hero Poster.png';

const Hero = () => {
    return (
        <section className="py-16 md:py-24">
            <Wrapper>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* left div */}
                    <div className="space-y-6">
                        <h4 className="text-teal-700 font-semibold tesm md:text-base">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
                        <p className="text-gray-600 leading-relaxed">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
                        <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">Learn More</button>
                    </div>
                    {/* right div */}
                    <div className="flex justify-center md:justify-end">
                        <Image src={heroposter} alt="hero poster" />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Hero;