import React, { useState, useEffect, useMemo } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import EmptyList from "@/components/icons/EmptyList";

import Uploader from "@/components/ui/forms/uploader";
import Input from "@/components/ui/forms/input";
import Textarea from "@/components/ui/forms/textarea";
import Image from "next/image";
import Spinner from "@/components/custom/spinner";
import cn from "classnames";
import Button from "@/components/ui/button/ButtonNew";
import { ToggleSwitch } from "@/components/ui/button/toggle-switch";

import axios from "@/lib/axiosClient";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useSession } from "next-auth/react";

interface Step4Props {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step4: React.FC<Step4Props> = ({ setStep }) => {
    const { data: session } = useSession();
    const dispatch = useAppDispatch();
    const step1Data = useAppSelector((state) => state.taskCreation.step1);
    const step2Data = useAppSelector((state) => state.taskCreation.step2);

    const [nextError, setNextError] = useState("");

    const handleSubmit = () => {
        setStep(5);
    };

    return (
        <div className="absolute z-[40] flex h-full w-full flex-col gap-4 rounded-xl bg-black p-8 text-sm xl:text-base 3xl:text-lg">
            <div className="flex w-full flex-col items-center gap-14 mt-10 px-2 text-xs xl:text-sm 3xl:text-base">
                <div className="lineGradientHorizontal h-0.5 w-full"></div>
                <div className="flex w-full items-center justify-between px-4">
                    <div className="mr-2 whitespace-pre text-primary">task title -</div>
                    <div>{step1Data.issueTitle}</div>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                    <div className="mr-2 whitespace-pre text-primary">anonymized description -</div>
                    <div className="underline">View Anonymized description</div>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                    <div className="mr-2 whitespace-pre text-primary">additional comments -</div>
                    <div className="underline">View Additional Comments</div>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                    <div className="mr-2 whitespace-pre text-primary">deadline -</div>
                    <div>{step2Data.deadline}</div>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                    <div className="mr-2 whitespace-pre text-primary">task incentive -</div>
                    <div className="flex items-center gap-2">
                        <div>{step2Data.funds}</div>
                        <div className="relative h-6 w-6 overflow-hidden rounded-full">
                            <Image
                                src={"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU/logo.png"}
                                alt="icon"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>$USDC</div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                    <div className="mr-2 whitespace-pre text-primary">tip for OSS Dependency issues -</div>
                    <div className="flex items-center gap-2">
                        <div>{step2Data.blockerCost}</div>
                        <div className="relative h-6 w-6 overflow-hidden rounded-full">
                            <Image
                                src={"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU/logo.png"}
                                alt="icon"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>$USDC</div>
                    </div>
                </div>
                <div className="lineGradientHorizontal h-0.5 w-full"></div>
            </div>
            <div className="mt-auto flex w-full items-center justify-end gap-3">
                <div className="normal text-xs text-red-400 xl:text-sm 3xl:text-base">{nextError}</div>
                <Button color="PrimaryOutline" onClick={() => setStep(3)}>
                    back
                </Button>
                <Button color="PrimarySolid" onClick={handleSubmit}>
                    create
                </Button>
            </div>
        </div>
    );
};

export default Step4;
