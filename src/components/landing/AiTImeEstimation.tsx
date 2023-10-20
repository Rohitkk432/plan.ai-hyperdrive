import React from "react";
import Image from "@/components/ui/image";
import AITImeEstImg from "@/assets/images/landing/LandingS1.png";

interface AITimeEstimationProps {}

export const AITimeEstimation: React.FC<AITimeEstimationProps> = ({}) => {
    return (
        <div className="z-[40] flex w-screen items-center flex-wrap-reverse justify-center bg-black md:py-24 py-16 xl:py-32 gap-20 px-16">
            <div className="conic-gradient flex w-[24rem]  md:w-[30rem] lg:w-[34rem] rounded-[3rem] md:rounded-[5rem] py-8 px-10 xl:w-[40rem] 3xl:w-[45rem]">
                <Image
                    width={0}
                    height={0}
                    alt="screen"
                    style={{ width: "100%", height: "auto" }} // optional
                    sizes="100vw"
                    src={AITImeEstImg}
                />
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white 2xl:text-5xl">AI Time Estimation</div>
                <div className="text-base lg:text-lg text-gray-400 xl:text-xl 3xl:text-2xl">
                    <span className="text-white">AI Time Estimation.</span>
                    No longer worry about
                    <br />
                    accurately making timeline estimations, <br />
                    predicting deadlines and extending sprints. <br />
                    plAn&apos;s AI solves all these problems.
                </div>
                <div className="text-base lg:text-lg text-gray-400 xl:text-xl 3xl:text-2xl">
                    <span className="text-white">Uniquely tailored to your team&apos;s cadence.</span>
                    <br />
                    plAn&apos;s AI learns individually from all the <br /> members of your team and uniquely delivers <br /> an accurate estimate every time.
                </div>
            </div>
        </div>
    );
};

export default AITimeEstimation;
