import React from "react";
import { NextSeo } from "next-seo";
import Landing from "@/components/landing/Landing";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
    return (
        <>
            <NextSeo title="plAn.ai" description="plAn.ai - The first project management tool that gets things done" />
            <Landing />
        </>
    );
};

export default LandingPage;
