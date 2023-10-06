import React from "react";
import SigninBtn from "@/components/landing/SigninBtn";

interface HeaderLandingProps {}

export const HeaderLanding: React.FC<HeaderLandingProps> = ({}) => {
    return (
        <div className="z-[20] mt-20 flex w-screen flex-col items-center">
            <div className="text-center text-5xl font-black text-primary 2xl:text-6xl">
                The first AI project management tool<br/> that also gets your job done
            </div>
            <div className="mt-20">
                <SigninBtn />
            </div>
        </div>
    );
};

export default HeaderLanding;
