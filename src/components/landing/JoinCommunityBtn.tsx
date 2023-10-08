import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "@/components/ui/image";
import { OpenAIIcon } from "@/components/icons/brand/openai";
import SolanaLogo from "@/assets/images/landing/solana-sol-logo.svg";
interface JoinCommunityBtnProps {}

export const JoinCommunityBtn: React.FC<JoinCommunityBtnProps> = ({}) => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute z-[20] flex cursor-pointer items-center justify-start gap-3 whitespace-nowrap rounded-lg bg-[#0a0a0a] px-[18px] py-3 text-xs xl:text-sm 3xl:text-base">
                <OpenAIIcon className="w-7 h-7 mt-1 text-white" />
                <div className="flex items-start justify-start">
                    <div className="font-bold leading-normal text-[#F5E468] mr-5">Powered by AI</div>
                    <div className="h-[0px] w-5 origin-top-left rotate-90 border border-primary"></div>
                    <div className="flex items-start justify-start gap-3">
                        <div className="font-semibold leading-snug tracking-tight text-[#6BAE63]">Supercharged by Web3</div>
                        <div className="relative h-3.5 xl:h-4 3xl:h-5 w-3.5 xl:w-4 3xl:w-5">
                            <Image width={0} fill height={0} alt="logo" className="object-contain" src={SolanaLogo} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute z-[10] flex items-center justify-start gap-3 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#FE9A3E] to-[#6BAE63] px-[18px] px-[18px] py-3 py-3 text-xs blur-[16px] xl:text-sm 3xl:text-base">
                <OpenAIIcon className="w-8 h-8 text-white" />
                <div className="flex items-start justify-start gap-6">
                    <div className="font-bold leading-normal text-[#F5E468]">Powered by AI</div>
                    <div className="h-[0px] w-5 origin-top-left rotate-90 border border-primary"></div>
                    <div className="flex items-start justify-start gap-3">
                        <div className="font-semibold leading-snug tracking-tight text-[#6BAE63]">Supercharged by Web3</div>
                        <div className="relative h-3.5 xl:h-4 3xl:h-5 w-3.5 xl:w-4 3xl:w-5">
                            <Image width={0} fill height={0} alt="logo" className="object-contain" src={SolanaLogo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCommunityBtn;
