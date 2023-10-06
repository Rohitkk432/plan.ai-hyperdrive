import React from "react";
import { CurrencyDollarIcon, LightBulbIcon, GlobeAsiaAustraliaIcon, PlusCircleIcon, FaceSmileIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

interface FeatureCardProps {
    body: string;
    title: string;
    element: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ body, title, element }) => {
    return (
        <div className="flex w-[23rem] h-[17rem] flex-col gap-4 rounded-2xl bg-black p-6 shadow-xl xl:w-[25rem] xl:p-7 3xl:w-[30rem] 3xl:p-8">
            <div className="flex h-10 w-10 items-center justify-start pr-2">{element}</div>
            <div className="text-base text-white xl:text-lg 3xl:text-xl">{title}</div>
            <div className="text-base text-gray-400 xl:text-lg 3xl:text-xl">{body}</div>
        </div>
    );
};

interface FeaturesProps {
    scrollRef: any;
}

export const Features: React.FC<FeaturesProps> = ({ scrollRef }) => {
    return (
        <div className="z-[20] flex w-screen flex-col items-center justify-center gap-10 top-bottom-landing-grad py-52 pt-16">
            <div ref={scrollRef} className="pt-16 text-center text-4xl font-black tracking-tight text-white 2xl:text-5xl">
                10x your engineering powers,
                <br />
                outsource work without revealing company secrets
            </div>
            <div className="text-lg text-gray-400 xl:text-xl 3xl:text-2xl">scale whenever you want to, as easily as possible</div>
            <div className="mb-2 flex w-full flex-wrap items-center justify-center gap-5 xl:gap-6 3xl:gap-8">
                <FeatureCard
                    element={<CurrencyDollarIcon className="h-10 w-10 text-primary" />}
                    title={"outsource work to skilled and talented developers "}
                    body={"developers are chosen & ranked based on decentralized staking to ensure the highest quality"}
                />
                <FeatureCard
                    element={<LightBulbIcon className="h-10 w-10 text-primary" />}
                    title={"preserve your company privacy"}
                    body={"AI code anonymization ensures the highest level of privacy for company IP."}
                />
                <FeatureCard element={<GlobeAsiaAustraliaIcon className="h-10 w-10 text-primary" />} title={"like uber, but for software"} body={"outsource whenever you want, the power is yours. "} />
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-5 xl:gap-6 3xl:gap-8">
                <FeatureCard
                    element={<PlusCircleIcon className="h-10 w-10 text-primary" />}
                    title={"always safe OSS dependencies"}
                    body={"automatically detect & create tasks for issues on open source dependencies"}
                />
                <FeatureCard
                    element={<FaceSmileIcon className="h-10 w-10 text-primary" />}
                    title={"focus on what you do best"}
                    body={"outsource everything else, letting you iterate faster than ever."}
                />
                <FeatureCard
                    element={<DocumentTextIcon className="h-10 w-10 text-primary" />}
                    title={"done when you want it to be"}
                    body={"however tight your deadlines are, plAn finds the right developers who deliver work on time"}
                />
            </div>
        </div>
    );
};

export default Features;
