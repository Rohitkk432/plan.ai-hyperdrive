import React from "react";
import SigninBtn from "@/components/landing/SigninBtn";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <SigninBtn />
        </div>
    );
};

export default LandingPage;
