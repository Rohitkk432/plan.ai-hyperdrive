import React from "react";
import Image from "@/components/ui/image";
import LandingScreen3 from "@/assets/images/images/LandingScreen3.png";

interface TryDemoProps {}

export const TryDemo: React.FC<TryDemoProps> = ({}) => {
    return (
        <div className="flex w-screen flex-col items-center justify-center gap-10 py-32">
            <div className="text-4xl font-black tracking-tight text-white 2xl:text-5xl">try out the demo today</div>
            <div className="text-center text-base text-gray-400 xl:text-lg 3xl:text-xl">
                by tokenizing open source projects, you gain the ability to grant access to all the utility that a <br />
                web3 token provides like voting on relevant issues and PRs through staking, access to token-
                <br />
                gated communities and additional utility as determined by project owners
            </div>
            <div className="conic-gradient-2 flex w-[55rem] items-end rounded-2xl p-16 pb-0 xl:w-[60rem] 3xl:w-[65rem]">
                <Image
                    width={0}
                    height={0}
                    alt="screen"
                    style={{ width: "100%", height: "auto" }} // optional
                    sizes="100vw"
                    src={LandingScreen3}
                    className="opacity-0"
                />
            </div>
        </div>
    );
};

export default TryDemo;
