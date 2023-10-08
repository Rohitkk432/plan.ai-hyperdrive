import React from "react";
import Image from "@/components/ui/image";
import AIAutoAssignImg from "@/assets/images/landing/LandingS2.png";

interface AIAutoAssignProps {}

export const AIAutoAssign: React.FC<AIAutoAssignProps> = ({}) => {
    return (
        <div className="z-[40] flex w-screen items-center justify-between bg-black py-48 px-32">
            <div className="flex flex-col gap-8 pl-28">
                <div className="text-4xl font-black tracking-tight text-white 2xl:text-5xl">AI Auto-Assign</div>
                <div className="text-base text-gray-400 xl:text-lg 3xl:text-xl">
                    <span className="text-white">Based on skill. </span>
                    Immediately assigns the developer
                    <br /> who is uniquely capable to execute on the task, <br />
                    based on their skill.
                </div>
                <div className="text-base text-gray-400 xl:text-lg 3xl:text-xl">
                    <span className="text-white">Based on availability & previous performance. </span>
                    <br />
                    When multiple members of your team are at the <br />
                    same skill level, the developer that&apos;s most likely
                    <br /> to complete the task based on their previous
                    <br /> performance & current availability is assigned.
                </div>
            </div>
            <div className="conic-gradient flex w-[34rem] rounded-[5rem] py-10 xl:w-[40rem] 3xl:w-[45rem] px-8">
                <Image
                    width={0}
                    height={0}
                    alt="screen"
                    style={{ width: "100%", height: "auto" }} // optional
                    sizes="100vw"
                    src={AIAutoAssignImg}
                />
            </div>
        </div>
    );
};

export default AIAutoAssign;
