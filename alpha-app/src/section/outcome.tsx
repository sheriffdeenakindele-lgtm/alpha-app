import React from "react";
import Wrapper from "../shared/wrapper";
import female from '../assests/female.png';
import Image from "next/image";

const Outcome = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex gap-x-8 items-center flex-col-reverse md:flex-row">
                    {/* left image */}
                    <div>
                        <Image src={female} alt="female" />
                    </div>
                    {/* right */}
                    <div className="flex-1">
                        <h1 className="font-bold text-xl">The Outcome for Participants of the Program</h1>
                        <p className="mt-4 text-slate-600 text-lg">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Outcome;
