import React from "react";
import Logo from "@/assets/images/logos/logo.png";
import Image from "@/components/ui/image";
import SigninBtn from "@/components/landing/SigninBtn";

interface LandingPreFooterProps {}

export const LandingPreFooter: React.FC<LandingPreFooterProps> = ({}) => {
    return (
        <div className="flex w-screen flex-col items-center justify-center gap-6 bg-[#060606] py-20">
            <div className="h-16 md:h-20 xl:h-24 3xl:h-28 mb-6">
                <Image
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "100%" }} // optional
                    src={Logo}
                />
            </div>
            <div className="text-center text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white 2xl:text-5xl">get started with plAn today.</div>
            <div className="mt-12">
                <SigninBtn />
            </div>
        </div>
    );
};

export default LandingPreFooter;
