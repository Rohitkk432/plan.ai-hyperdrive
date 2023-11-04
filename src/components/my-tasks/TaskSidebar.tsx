import React, { useState } from "react";
import { useDrawer } from "@/components/drawer-views/context";
import { useCopyToClipboard } from "react-use";

import Link from "next/link";
import AnchorLink from "@/components/ui/links/anchor-link";
import Textarea from "@/components/ui/forms/textarea";
import { CustomDatePicker } from "@/components/ui/datepicker";
import cn from 'classnames';

import CustomSelect from "@/components/ui/dropdowns/custom-select";

import {
    ArrowLeftIcon,
    ArrowTopRightOnSquareIcon,
    StopCircleIcon,
    WrenchScrewdriverIcon,
    BanknotesIcon,
    CalendarIcon,
    ClipboardIcon,
} from "@heroicons/react/24/outline";

import { JiraWhiteIcon } from "@/components/icons/jira-white";

import { SignalCellularAlt } from "@mui/icons-material";

import {IssueStates,Priorities,States} from '@/config/filters'

interface TaskSidebarProps {}

export const TaskSidebar: React.FC<TaskSidebarProps> = ({}) => {
    const { closeDrawer } = useDrawer();

    const [issueDescription, setIssueDescription] = useState("Integrate end to end testing using selenium");

    const [startDate, setStartDate] = useState("2023-11-04");
    const [endDate, setEndDate] = useState("2023-12-04");

    const [copyButtonStatus, setCopyButtonStatus] = useState(false);
    const [_, copyToClipboard] = useCopyToClipboard();
    function handleCopyToClipboard() {
        //@ts-ignore
        copyToClipboard("https://defi-os.com");
        setCopyButtonStatus(true);
        setTimeout(() => {
            setCopyButtonStatus(copyButtonStatus);
        }, 2500);
    }

    return (
        <div className="fixed top-0 right-0 bottom-0 z-40 w-[50vw] overflow-y-auto overflow-x-hidden gap-4 flex flex-col p-5 bg-black border-l border-primary shadow-xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <ArrowLeftIcon className="w-5 h-5 cursor-pointer" onClick={closeDrawer} />
                    <Link href="/my-tasks/1" className="focus-visible:outline-0">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 cursor-pointer" />
                    </Link>
                </div>
            </div>
            <div className="3xl:text-xl xl:text-lg text-base text-gray-400">PT-3</div>
            <div className="3xl:text-lg xl:text-base text-sm ml-3">E2E Testing with selenium</div>
            <Textarea placeholder="description" value={issueDescription} />
            <div className="flex flex-col gap-4 w-[50%] mt-8">
                <div className="3xl:text-base font-medium xl:text-sm text-xs grid grid-cols-2 items-center">
                    <div className="flex items-center gap-3">
                        <JiraWhiteIcon className="!w-5 !h-5" />
                        <div>Jira Link</div>
                    </div>
                    <div className="flex items-center gap-5">
                        <AnchorLink href={"https://defi-os.com"} target="_blank">
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 cursor-pointer" />
                        </AnchorLink>
                        <ClipboardIcon onClick={handleCopyToClipboard} className={cn("w-5 h-5 cursor-pointer", { "text-green-400": copyButtonStatus })} />
                    </div>
                </div>
                <div className="3xl:text-base font-medium xl:text-sm text-xs grid grid-cols-2 items-center">
                    <div className="flex items-center gap-3">
                        <BanknotesIcon className="!w-5 !h-5" />
                        <div>Bounty</div>
                    </div>
                    <div className="">$400</div>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <div className="3xl:text-base font-medium xl:text-sm text-xs flex items-center gap-3">
                        <StopCircleIcon className="!w-5 !h-5" />
                        <div>State</div>
                    </div>
                    <CustomSelect select={States} value={States[0]} />
                </div>
                <div className="grid grid-cols-2 items-center">
                    <div className="3xl:text-base font-medium xl:text-sm text-xs flex items-center gap-3">
                        <SignalCellularAlt className="!w-5 !h-5" />
                        <div>Priority</div>
                    </div>
                    <CustomSelect className="!text-gray-400" modalClassName="!text-gray-400" select={Priorities} value={Priorities[4]} />
                </div>
                <div className="grid grid-cols-2 items-center">
                    <div className="3xl:text-base font-medium xl:text-sm text-xs flex items-center gap-3">
                        <WrenchScrewdriverIcon className="!w-5 !h-5" />
                        <div>Issue State</div>
                    </div>
                    <CustomSelect select={IssueStates} value={IssueStates[0]} />
                </div>
                <div className="grid grid-cols-2 items-center">
                    <div className="3xl:text-base font-medium xl:text-sm text-xs flex items-center gap-3">
                        <CalendarIcon className="!w-5 !h-5" />
                        <div>Start Date</div>
                    </div>
                    <CustomDatePicker
                        placeholder="Start date"
                        value={startDate}
                        onChange={(val) => {
                            if (val !== null) {
                                console.log(val);
                                setStartDate(val);
                            }
                        }}
                        className="bg-light-gray focus:ring-light-gray px-3 3xl:text-sm xl:text-xs text-2xs rounded-md text-white gap-3 px-3 py-1"
                        renderAs="input"
                        isClearable={true}
                    />
                </div>
                <div className="grid grid-cols-2 items-center">
                    <div className="3xl:text-base font-medium xl:text-sm text-xs flex items-center gap-3">
                        <CalendarIcon className="!w-5 !h-5" />
                        <div>Due Date</div>
                    </div>
                    <CustomDatePicker
                        placeholder="End date"
                        value={endDate}
                        onChange={(val) => {
                            if (val !== null) {
                                console.log(val);
                                setEndDate(val);
                            }
                        }}
                        className="bg-light-gray focus:ring-light-gray px-3 3xl:text-sm xl:text-xs text-2xs rounded-md text-white gap-3 px-3 py-1"
                        renderAs="input"
                        isClearable={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default TaskSidebar;
