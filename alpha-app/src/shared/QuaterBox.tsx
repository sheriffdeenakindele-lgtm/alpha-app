import React, {FC} from "react";

interface Iprops {
    title: string;
    paragraph: string;
    num: string;
    haveBorder?: boolean;
}

const QuaterBox: React.FC<Iprops> = ({ title, paragraph, num, haveBorder = true }) => {
    return (
        <div className={`${haveBorder && "border"} rounded-md basis-4/12 md:w-96 md:h-48 relative px-8 py-12 flex flex-col justify-center overflow-hidden`} style={{ borderWidth: haveBorder ? '1px' : '0' }}>
            {/* Quarter Number Background */}
            <span className="absolute -top-10 right-5 text-[170px] font-bold text-gray-200 select-none pointer-events-none z-0"> 
                {num} 
            </span>

            {/* Content */}
            <div className="relative z-10">
                <h4 className="font-bold text-lg">{title}</h4>
                <p className="mt-2 text-gray-600">{paragraph}</p>
            </div>
        </div>
    );
};

export default QuaterBox;