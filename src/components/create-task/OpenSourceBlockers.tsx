import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button/ButtonNew";
import { GithubOutlineIcon } from "@/components/icons/github-outline";
import { ExclamationCircleIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

interface OpenSourceBlockersProps {
    title: string;
    repoName: string;
    impact: string;
    cost: number;
    data: any;
    blockers: any;
    setBlockers: React.Dispatch<React.SetStateAction<any>>;
    setBlockersCost: React.Dispatch<React.SetStateAction<number>>;
}

export const OpenSourceBlockers: React.FC<OpenSourceBlockersProps> = ({ title, repoName, impact, cost, data, blockers, setBlockers, setBlockersCost }) => {
    const [added, setAdded] = useState(false);
    useEffect(() => {
        const findItem = blockers.filter((item: any) => {
            return item.title === title;
        });

        if (findItem.length >= 1) {
            setAdded(true);
        } else {
            setAdded(false);
        }
    }, [blockers]);
    return (
        <div className="flex p-4 w-full justify-between rounded-3xl gap-3 bg-light-gray">
            <div className="flex flex-col gap-3">
                <div className="3xl:text-lg xl:text-base text-sm font-semibold">{title}</div>
                <div className="flex items-center gap-5 3xl:text-base xl:text-sm text-xs">
                    <div className="flex items-center gap-1">
                        <GithubOutlineIcon className="text-primary w-6 h-6 " />
                        <div>{repoName}</div>
                    </div>
                    <div className="flex items-center gap-1">
                        <ExclamationCircleIcon className="text-primary w-6 h-6 " />
                        <div className="font-semibold">Impact: </div>
                        <div className="font-semibold text-red-500 ">{impact}</div>
                        <QuestionMarkCircleIcon className="h-4 w-4 " />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <div className="3xl:text-xl xl:text-lg text-base font-semibold">${cost}</div>
                {!added && (
                    <Button
                        onClick={() => {
                            setBlockers((state: any) => [...state, data]);
                            setBlockersCost((state: number) => state + cost);
                        }}
                        size="mini"
                        color="PrimaryOutline">
                        + add
                    </Button>
                )}
                {added && (
                    <Button
                        onClick={() => {
                            const removeItem = blockers.filter((item: any) => {
                                return item.title !== title;
                            });
                            setBlockers((state: any) => removeItem);
                            setBlockersCost((state: number) => state - cost);
                        }}
                        size="mini"
                        color="PrimaryOutline">
                        - remove
                    </Button>
                )}
            </div>
        </div>
    );
};

export default OpenSourceBlockers;
