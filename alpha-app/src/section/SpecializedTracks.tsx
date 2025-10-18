"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Wrapper from '../shared/wrapper';
import QuaterBox from '../shared/QuaterBox';
// images
import ai from '../assests/ai.png';
import cnc from '../assests/cnc.png';
import iot from '../assests/iot.png';
import gbs from '../assests/gbs.png';
import metaverse from '../assests/metaverse.png';
import network from '../assests/network.png';

// metaverse
export const data = [
    // metaverse
    {
        slug: "metaverse",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: metaverse,
        quarters: [
            {
                title: "Quarter IV",
                paragraph: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: "4",
                haveBorder: false
            },
            {
                title: "Quarter V",
                paragraph: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: "5",
                haveBorder: false
            }
        ]
    },

    // ai
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: ai,
        quarters: [
            {
                title: "Quarter IV",
                paragraph: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: "4",
                haveBorder: false
            },
            {
                title: "Quarter V",
                paragraph: "AI-361: Deep Learning and MLOps",
                number: "5",
                haveBorder: false
            }
        ]
    },

    // cnc
    {
        slug: "cnc",
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image: cnc,
        quarters: [
            {
                title: "Quarter IV",
                paragraph: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: "4",
                haveBorder: false
            },
            {
                title: "Quarter V",
                paragraph: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: "5",
                haveBorder: false
            }
        ]
    },

    // iot
    {
        slug: "iot",
        header: "Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image: iot,
        quarters: [
            {
                title: "Quarter IV",
                paragraph: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: "4",
                haveBorder: false
            },
            {
                title: "Quarter V",
                paragraph: "AC-361: Embedded Programming using C and Rust",
                number: "5",
                haveBorder: false
            }
        ]
    },

    //gbs
    {
        slug: "gbs",
        header: "Genomics and Bioinformatics Specialization",
        description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image: gbs,
        quarters: [
            {
                title: "Quarter IV",
                paragraph: "Bio-351: Python for Biologists",
                number: "4",
                haveBorder: false
            },
            {
                title: "Quarter V",
                paragraph: "Bio-361: Bioinformatics with Python",
                number: "5",
                haveBorder: false
            }
        ]
    },

    //network
    {
        slug: "network",
        header: "Network Programmability and Automation Specialization",
        description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image: network,
        quarters: [
            {
                title: "Quarter IV",
                paragraph: "NPA-351: CCNA 200-301 Certification",
                number: "4",
                haveBorder: false
            },
            {
                title: "Quarter V",
                paragraph: "NPA-361: Network Programmability and Automation",
                number: "5",
                haveBorder: false
            }
        ]
    }
];




const SpecializedTracks = () => {

    const [selectedItem, setSelectedItem] = useState("metaverse");
    const selectedItemData = data.find((item) => item.slug === selectedItem);
    // console.log(selectedItemData);

    return (
        <section>
            <Wrapper>
                {/* header */}
                <div>
                    <h2 className="text-4xl font-bold">Specialized Tracks:</h2>
                    <p className="mt-3 text-lg text-slate-600 leading-[30px] max-w-xl">After completing the first three quarters the participants will select one or more specializations consisting of two courses each:</p>
                </div>



                <div className='mt-10 flex flex-col-reverse md:flex-row gap-y-8'>
                    {/* left */}
                    <div className='shadow xl self-start sticky top-28 basis-8/12 rounded-x1 border border-slate-200 py-8 px-8'>
                        <h4 className="text-teal-700 text-lg font-medium">Specialized Program</h4>
                        <h3 className="text-2xl font-bold"> {selectedItemData?.header}</h3>
                        <p className="text-lg text-slate-600 mt-2">{selectedItemData?.description}</p>
                        <button className='inline-flex items-center gap-2 px-6 py-3 mt-6 text-teal-700 text-lg font-semibold border-2 border-teal-700 rounded-lg bg-white'>
                            Learn More
                            <svg className='w-4 h-4' width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>

                        <div className="flex flex-col md:flex-row gap-4 mt-8">
                            <QuaterBox 
                                title={selectedItemData?.quarters[0]?.title || "Quarter IV"} 
                                paragraph={selectedItemData?.quarters[0]?.paragraph || "Course description"} 
                                num={selectedItemData?.quarters[0]?.number || "4"} 
                                haveBorder={selectedItemData?.quarters[0]?.haveBorder || false} 
                            />
                            <QuaterBox 
                                title={selectedItemData?.quarters[1]?.title || "Quarter V"} 
                                paragraph={selectedItemData?.quarters[1]?.paragraph || "Course description"} 
                                num={selectedItemData?.quarters[1]?.number || "5"} 
                                haveBorder={selectedItemData?.quarters[1]?.haveBorder || false} 
                            />
                        </div>
                    </div>

                    {/* right */}

                    <div className='px-4 py-6 space-y-6 basis-4/12'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div onClick={()=>setSelectedItem(item.slug)} key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 cursor-pointer group">
                                        {/* Image Container */}
                                        <div className='flex-shrink-0'>
                                            <div className='w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-lg'>
                                                <Image 
                                                    src={item.image} 
                                                    alt={item.header} 
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Content Container */}
                                        <div className="flex-1 space-y-2">
                                            <h4 className="text-teal-700 font-semibold text-sm md:text-base leading-tight">
                                                {item.header}
                                            </h4>
                                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default SpecializedTracks;