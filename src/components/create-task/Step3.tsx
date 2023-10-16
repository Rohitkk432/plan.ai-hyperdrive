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
import DeveloperCard from "@/components/create-task//DeveloperCard";

import axios from "@/lib/axiosClient";
import { useAppDispatch, useAppSelector } from "@/store/store";
// import { set2Data } from "@/store/newCreationSlice";
import { useSession } from "next-auth/react";

interface Step3Props {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step3: React.FC<Step3Props> = ({ setStep }) => {
    const { data: session } = useSession();
    const dispatch = useAppDispatch();
    // const step2Data = useAppSelector((state) => state.newCreation.step2);

    const [nextError, setNextError] = useState("");

    const handleSubmit = () => {
        setStep(4);
    };

    return (
        <div className="absolute z-[40] flex h-full w-full flex-col gap-2 rounded-xl bg-black p-8 text-sm xl:text-base 3xl:text-lg">
            <div className="flex items-center gap-3 font-semibold  3xl:text-base xl:text-sm text-xs uppercase">
                <div>Main Developer</div>
                <QuestionMarkCircleIcon className="h-5 w-5 " />
                <ExpandableBtn label="AI Developer Picker" size="large" height="small" />
            </div>
            <DeveloperCard
                name="Rohit Kodam"
                img="https://avatars.githubusercontent.com/u/74586376?v=4"
                description="I'm excited to work on your project. Rest assured, I've successfully completed three similar tasks before. With my experience, skills, and dedication, I am confident in delivering quality results before the deadline. Your satisfaction is my priority. Looking forward to exceeding your expectations."
                number="21"
                stars="4.3"
                skills=" ReactJS (Proficient), solana.js (experience of 3 jobs), Openai APIs (certified)"
            />
            <div className="flex items-center gap-3 font-semibold  3xl:text-base xl:text-sm text-xs uppercase">
                <div>Backup Developer</div>
                <QuestionMarkCircleIcon className="h-5 w-5 " />
                <ExpandableBtn label="AI Developer Picker" size="large" height="small" />
            </div>
            <DeveloperCard
                name="Tanmay Munjal"
                img="https://avatars.githubusercontent.com/u/72982935?v=4"
                description="I've collaborated with the lead freelancer before and can vouch for their expertise. I'm the backup on this project. My calendar is clear, ensuring I'm available to step in immediately if needed, guaranteeing the task's completion on time."
                number="32"
                stars="4.5"
                skills="Javascript (Fluent), solana.js (experience of 3 jobs), Python APIs (Expert)"
            />
            <div className="mt-auto flex w-full items-center justify-end gap-3">
                <div className="normal text-xs text-red-400 xl:text-sm 3xl:text-base">{nextError}</div>
                <Button color="PrimaryOutline" onClick={() => setStep(2)}>
                    back
                </Button>
                <Button color="PrimarySolid" onClick={handleSubmit}>
                    next
                </Button>
            </div>
        </div>
    );
};

export default Step3;
