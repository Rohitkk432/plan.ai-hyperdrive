import React from "react";
import Image from "@/components/ui/image";
import AITImeEstImg from "@/assets/images/landing/LandingS1.png";

interface AITimeEstimationProps {}

export const AITimeEstimation: React.FC<AITimeEstimationProps> = ({}) => {
    return (
        <div className="z-[40] flex w-screen items-center justify-between bg-black py-48 px-32">
            <div className="conic-gradient flex w-[340rem] rounded-[5rem] py-10 px-5 xl:w-[40rem] 3xl:w-[45rem]">
                <Image
                    width={0}
                    height={0}
                    alt="screen"
                    style={{ width: "100%", height: "auto" }} // optional
                    sizes="100vw"
                    src={AITImeEstImg}
                />
            </div>
            <div className="flex flex-col gap-8 pr-28">
                <div className="text-4xl font-black tracking-tight text-white 2xl:text-5xl">AI Time Estimation</div>
                <div className="text-base text-gray-400 xl:text-lg 3xl:text-xl">
                    <span className="text-white">AI Time Estimation.</span>
                    No longer worry about
                    <br />
                    accurately making timeline estimations, <br />
                    predicting deadlines and extending sprints. <br />
                    plAn&apos;s AI solves all these problems.
                </div>
                <div className="text-base text-gray-400 xl:text-lg 3xl:text-xl">
                    <span className="text-white">Uniquely tailored to your team&apos;s cadence.</span>
                    <br />
                    plAn&apos;s AI learns individually from all the <br /> members of your team and uniquely delivers <br /> an accurate estimate every time.
                </div>
            </div>
        </div>
    );
};

export default AITimeEstimation;
