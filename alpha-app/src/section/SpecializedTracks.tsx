import React from 'react';
import Wrapper from '../shared/wrapper';

const SpecializedTracks = () => {
    return (
        <section>
            <Wrapper>
                {/* header */}
                <div className="space-y-6 mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Specialized Tracks:</h1>
                    <p className="mt-3 text-lg text-slate-600 leading-[30px] max-w-xl">After completing the first three quarters the participants will select one or more specializations consisting of two courses each:</p>
                </div>

                {/* left */}


                <div>
                    <h4 className="text-teal-700 font-semibold text-sm md:text-base">Specialized Program</h4>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Web 3.0 (Blockchain) and Metaverse <br /> Specialization</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                    </p>
                    <button></button>
                </div>

                {/* right */}

                <div></div>

            </Wrapper>
        </section>
    );
}

export default SpecializedTracks;