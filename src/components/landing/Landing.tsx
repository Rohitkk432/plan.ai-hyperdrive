import React, { useRef } from "react";
import Head from "next/head";

import Nav from "@/components/landing/Nav";
import JoinCommunityBtn from "@/components/landing/JoinCommunityBtn";
import HeaderLanding from "@/components/landing/HeaderLanding";
import HeaderScreen from "@/components/landing/HeaderScreen";
import TrustedPartners from "@/components/landing/TrustedPartners";
import Features from "@/components/landing/Features";
import TryDemo from "@/components/landing/TryDemo";
import LandingPreFooter from "@/components/landing/LandingPreFooter";
import LandingFooter from "@/components/landing/LandingFooter";

import AITimeEstimation from "@/components/landing/AiTImeEstimation";
import AIAutoAssign from "@/components/landing/AIAutoAssign";
import AIInsights from "@/components/landing/AIInsights";

import Logo from "@/assets/images/logos/logo.png";
import Image from "@/components/ui/image";

interface LandingProps {}

export const Landing: React.FC<LandingProps> = ({}) => {
    const ref = useRef<null | HTMLDivElement>(null);

    const handleFeatureClick = () => {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Head>
                <title>plAn.ai - The first project management tool that gets things done</title>
            </Head>
            <div className="flex min-h-screen w-screen flex-col items-center overflow-y-auto overflow-x-hidden bg-[#060606]">
                <Nav handleFeatureClick={handleFeatureClick} />
                <div className="h-20 xl:h-24 3xl:h-28 my-20">
                    <Image
                        alt="image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "100%" }} // optional
                        src={Logo}
                    />
                </div>
                <div className="">
                    <JoinCommunityBtn />
                </div>
                <HeaderLanding />
                <HeaderScreen />
                <TrustedPartners />
                <AITimeEstimation />
                <AIAutoAssign />
                <AIInsights />
                <Features scrollRef={ref} />
                <TryDemo />
                <LandingPreFooter />
                <LandingFooter />
            </div>
        </>
    );
};

export default Landing;
