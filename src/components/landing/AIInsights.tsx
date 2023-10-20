import React from "react";
import Image from "@/components/ui/image";
import AIInsightsImg from "@/assets/images/landing/LandingS3.png";

interface AIInsightsProps {}

export const AIInsights: React.FC<AIInsightsProps> = ({}) => {
    return (
        <div className="z-[40] flex w-screen items-center flex-wrap-reverse justify-center bg-black md:py-24 py-16 xl:py-32 gap-20 px-16">
            <div className="conic-gradient flex w-[24rem]  md:w-[30rem] lg:w-[34rem] rounded-[3rem] md:rounded-[5rem] py-8 px-10 xl:w-[40rem] 3xl:w-[45rem]">
                <Image
                    width={0}
                    height={0}
                    alt="screen"
                    style={{ width: "100%", height: "auto" }} // optional
                    sizes="100vw"
                    src={AIInsightsImg}
                />
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white 2xl:text-5xl">
                    AI Insights from User
                    <br />
                    Feedback
                </div>
                <div className="text-base lg:text-lg text-gray-400 xl:text-xl 3xl:text-2xl">
                    <span className="text-white">AI Feature Suggestions. </span>
                    Don&apos;t guess what <br />
                    your users want - have AI analyze user <br />
                    feedback and automatically suggest features <br />
                    that have the most impact.
                </div>
                <div className="text-base lg:text-lg text-gray-400 xl:text-xl 3xl:text-2xl">
                    <span className="text-white">AI Auto-Prioritize. </span>
                    plAn&apos;s AI learns <br />
                    individually from all user feedback and <br />
                    automatically suggests the priority of every <br />
                    new issue, feature & task - so that you&apos;re on <br />
                    top of everything at all times.
                </div>
            </div>
        </div>
    );
};

export default AIInsights;
