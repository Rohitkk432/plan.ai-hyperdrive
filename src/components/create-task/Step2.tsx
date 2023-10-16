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

import ExpandableBtn from "@/components/create-task/ExpandableBtn";

import OpenSourceBlockers from "@/components/create-task/OpenSourceBlockers";

import axios from "@/lib/axiosClient";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setStep2Data } from "@/store/taskCreationSlice";
import { useSession } from "next-auth/react";
import { id } from "date-fns/locale";

interface Step2Props {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const BlockersDummy = [
    {
        title: "Documenting the selenium-wire integration with ...",
        repoName: "seleniumbase/SeleniumBaseImpact",
        impact: "high",
        cost: 50,
    },
    {
        title: "Dotnet devtools session does not support WSS?",
        repoName: "SeleniumHQ/selenium",
        impact: "medium",
        cost: 30,
    },
];

export const Step2: React.FC<Step2Props> = ({ setStep }) => {
    const { data: session } = useSession();
    const dispatch = useAppDispatch();
    const step2Data = useAppSelector((state) => state.taskCreation.step2);

    const [anonymizedDescription, setAnonymizedDescription] = useState(
        "Task: Implement comprehensive E2E testing to ensure the web application's frontend and responsiveness are functioning as expected. Use Selenium for thorough testing, identifying, and reporting any issues or areas for improvement.\n\nDeliverable: A detailed report of the testing process, findings, and recommendations for enhancements, ensuring the application operates seamlessly across different devices and browsers."
    );
    const [deadline, setDeadline] = useState("2023-10-31");
    const [funds, setFunds] = useState(400);

    const [showBlockers, setShowBlockers] = useState(false);

    const [blockers, setBlockers] = useState<any>([]);
    const [blockersCost, setBlockersCost] = useState<number>(0);

    const [nextError, setNextError] = useState("");

    const handleSubmit = () => {
        if (anonymizedDescription === "") {
            setNextError("Anonymized description is removed!");
            return;
        } else if (deadline === "") {
            setNextError("deadline not set!");
            return;
        } else if (funds === 0) {
            setNextError("funds not set!");
            return;
        }

        dispatch(
            setStep2Data({
                anonymizedDescription: anonymizedDescription,
                deadline: deadline,
                funds: funds,
                openSourceBlockers: blockers,
                blockerCost: blockersCost,
            })
        );
        setStep(3);
    };

    useEffect(() => {
        if (step2Data.anonymizedDescription !== "") {
            setAnonymizedDescription(step2Data.anonymizedDescription);
            setDeadline(step2Data.deadline);
            setFunds(step2Data.funds);
            setBlockers(step2Data.openSourceBlockers);
            setBlockersCost(step2Data.blockerCost);
        }
    }, [step2Data]);

    return (
        <div className="absolute z-[40] flex h-full w-full flex-col gap-4 rounded-xl bg-black p-8 text-sm xl:text-base 3xl:text-lg">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 font-semibold  3xl:text-base xl:text-sm text-xs uppercase">
                    <div>Anonymised Issue Description</div>
                    <QuestionMarkCircleIcon className="h-5 w-5 " />
                </div>
                <Textarea
                    placeholder={`this is the anonymized code snippet. Please edit it if you feel it's inaccurate.`}
                    value={anonymizedDescription}
                    onChange={(e) => setAnonymizedDescription(e.target.value)}
                    inputClassName="text-2xs xl:text-xs 3xl:text-sm h-full"
                />
            </div>

            <div className="flex w-full items-end gap-4">
                <div className="flex flex-col gap-1 w-[35%]">
                    <div className="flex items-center gap-3 font-semibold  3xl:text-base xl:text-sm text-xs uppercase">
                        <div>Choose Deadline</div>
                        <QuestionMarkCircleIcon className="h-5 w-5 " />
                    </div>
                    <Input value={deadline} onChange={(e) => setDeadline(e.target.value)} inputClassName="text-2xs xl:text-xs 3xl:text-sm" type="date" />
                </div>
                <ExpandableBtn label="AI Time Estimation" />
            </div>

            <div className="flex w-full items-end gap-4">
                <div className="flex flex-col gap-1 w-[35%]">
                    <div className="flex items-center gap-3 font-semibold  3xl:text-base xl:text-sm text-xs uppercase">
                        <div>Add Funds</div>
                        <QuestionMarkCircleIcon className="h-5 w-5 " />
                    </div>
                    <Input value={funds} onChange={(e) => setFunds(parseInt(e.target.value))} inputClassName="text-2xs xl:text-xs 3xl:text-sm" type="number" />
                </div>
                <ExpandableBtn label="AI Cost Estimation" />
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 font-semibold  3xl:text-base xl:text-sm text-xs uppercase">
                    <div>Open Source Blockers</div>
                    <QuestionMarkCircleIcon className="h-5 w-5 " />
                </div>
                <div className="text-red-500 3xl:text-base font-medium xl:text-sm text-xs ">(Impacts 5 tasks this sprint)</div>
                <div className="w-full h-[12.8rem] relative">
                    <div
                        className={cn("w-full h-full flex flex-col gap-2 pr-2 overflow-y-auto overflow-x-hidden transition-all delay-300", {
                            blur: !showBlockers,
                        })}>
                        <OpenSourceBlockers
                            blockers={blockers}
                            setBlockers={setBlockers}
                            setBlockersCost={setBlockersCost}
                            data={BlockersDummy[0]}
                            title={BlockersDummy[0].title}
                            repoName={BlockersDummy[0].repoName}
                            impact={BlockersDummy[0].impact}
                            cost={BlockersDummy[0].cost}
                        />
                        <OpenSourceBlockers
                            blockers={blockers}
                            setBlockers={setBlockers}
                            setBlockersCost={setBlockersCost}
                            data={BlockersDummy[1]}
                            title={BlockersDummy[1].title}
                            repoName={BlockersDummy[1].repoName}
                            impact={BlockersDummy[0].impact}
                            cost={BlockersDummy[0].cost}
                        />
                    </div>
                    {!showBlockers && (
                        <div
                            className={cn("absolute inset-0 flex items-center justify-center transition-all delay-300 z-[100]", {
                                hidden: showBlockers,
                            })}>
                            <div onClick={() => setShowBlockers(true)}>
                                <ExpandableBtn size="large" label="AI DEPENDENCY CHECK" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-auto flex w-full items-center justify-end gap-3">
                <div className="normal text-xs text-red-400 xl:text-sm 3xl:text-base">{nextError}</div>
                <Button color="PrimaryOutline" onClick={() => setStep(1)}>
                    back
                </Button>
                <Button color="PrimarySolid" onClick={handleSubmit}>
                    next
                </Button>
            </div>
        </div>
    );
};

export default Step2;
