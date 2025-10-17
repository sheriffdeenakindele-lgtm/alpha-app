import React from "react";
import Wrapper from "../shared/wrapper";
import QuaterBox from "../shared/QuaterBox";

const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: "1",
  },

  {
    header: "Quarter II",
    description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: "2",
  },

  {
    header: "Quarter III",
    description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: "3",
  },
];

const CoreTracks = () => {
  return (
    <section className="mt-16 lg:mt-28 overflow-hidden">
      <div className="absolute left-0 hidden sm:block">
        <div className="blur-[150px] -z-20 bg-[#05c19cb3] w-64 h-64 rounded-full"> </div>
      </div>
      <Wrapper>
        {/* Header Section */}
        <div className="space-y-6">
          <h4 className="text-teal-700 font-semibold text-sm md:text-base mb-4">PROGRAMS OF STUDY</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Core Courses <br />(Common in All Specializations): </h2>
          <p className="mt-3 text-lg text-slate-600 leading-[30px] max-w-xl">
            Every participant of the program will start by completing the following three core courses:
          </p>
          <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Enroll Now
          </button>
        </div>

        {/* boxes */}
        <div className="flex flex-col justify-center md:flex-row gap-y-4 items-stretch my-20 gap-x-4 max-w-screen-x1 mx-auto">
          {CoreTrackData.map((course, index) => (
            <QuaterBox
              key={index}
              title={course.header}
              paragraph={course.description}
              num={course.number}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
