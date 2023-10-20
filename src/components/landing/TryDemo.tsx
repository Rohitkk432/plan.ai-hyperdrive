import React from "react";
import Image from "@/components/ui/image";
import TryDemoImg from "@/assets/images/landing/LandingS4.png";

interface TryDemoProps {}

export const TryDemo: React.FC<TryDemoProps> = ({}) => {
    return (
        <div className="flex w-screen flex-col items-center justify-center gap-10 py-32">
            <div className="text-center text-2xl mx-8 sm:text-3xl md:text-4xl font-black tracking-tight text-white 2xl:text-5xl">try out the demo today</div>
            <div className="text-center text-sm md:text-base lg:text-lg text-gray-400 xl:text-xl 3xl:text-2xl mx-4">
                plAn&apos;s demo is live showcasing how task outsourcing, AI time estimation, cost estimation, open
                <br />
                source dependency resolution & task anonymization works. Check it out now -
            </div>
            <div className="conic-gradient-2 flex w-[80vw] lg:w-[55rem] items-end rounded-2xl pb-4 px-[15%] lg:px-40 pt-8 xl:w-[65rem] 3xl:w-[75rem]">
                <Image
                    width={0}
                    height={0}
                    alt="screen"
                    style={{ width: "100%", height: "auto" }} // optional
                    sizes="100vw"
                    src={TryDemoImg}
                />
            </div>
        </div>
    );
};

export default TryDemo;
