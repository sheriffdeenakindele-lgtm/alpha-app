import React from 'react';
import Wrapper from '../shared/wrapper';
import QuaterBox from '../shared/QuaterBox';

const SpecializedTracks = () => {
    return (
        <section>
            <Wrapper>
                {/* header */}
                <div className="space-y-6 mb-12">
                    <h2 className="text-4xl font-bold">Specialized Tracks:</h2>
                    <p className="mt-3 text-lg text-slate-600 leading-[30px] max-w-xl">After completing the first three quarters the participants will select one or more specializations consisting of two courses each:</p>
                </div>

                {/* left */}


                <div>
                    <h4 className="text-teal-700 text-lg font-medium">Specialized Program</h4>
                    <h3 className="text-2xl font-bold">Web 3.0 (Blockchain) and Metaverse <br /> Specialization</h3>
                    <p className="text-lg text-slate-600 mt-2">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                    </p>
                    <button className='text-teal-700 text-xl mt-4 underline flex gap-x-2 items-end hover:text-teal-800 transition-colors duration-300'>
                        Learn More
                        <svg className='mb-1.5' width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>

                    <div className="flex flex-col md:flex-row gap-4 mt-8">
                        <QuaterBox title="Quarter IV" paragraph="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps using Next.js 13, TypeScript, and Blockchain" num="4" haveBorder={false} />
                        <QuaterBox title="Quarter V" paragraph="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences using Next.js 13" num="5" haveBorder={false} />
                    </div>
                </div>

                {/* right */}

                <div>
                    
                </div>

            </Wrapper>
        </section>
    );
}

export default SpecializedTracks;