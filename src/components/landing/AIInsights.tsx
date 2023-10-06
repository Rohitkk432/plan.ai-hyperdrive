import React from "react";
import Image from "@/components/ui/image";
import RoadmapScreen from "@/assets/images/images/RoadmapScreen.png";

interface AIInsightsProps {}

export const AIInsights: React.FC<AIInsightsProps> = ({}) => {
    return (
        <div className="z-[40] flex w-screen items-center justify-between bg-black py-48 px-32">
            <div className="conic-gradient flex w-[340rem] rounded-[5rem] py-10 xl:w-[45rem] 3xl:w-[50rem]">
                <Image
                    width={0}
                    height={0}
                    alt="screen"
                    style={{ width: "100%", height: "auto" }} // optional
                    sizes="100vw"
                    src={RoadmapScreen}
                    className="opacity-0"
                />
            </div>
            <div className="flex flex-col gap-8 pr-28">
                <div className="text-4xl font-black tracking-tight text-white 2xl:text-5xl">
                    AI Insights from User
                    <br />
                    Feedback
                </div>
                <div className="text-base text-gray-400 xl:text-lg 3xl:text-xl">
                    <span className="text-white">AI Feature Suggestions. </span>
                    Don&apos;t guess what <br />
                    your users want - have AI analyze user <br />
                    feedback and automatically suggest features <br />
                    that have the most impact.
                </div>
                <div className="text-base text-gray-400 xl:text-lg 3xl:text-xl">
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
