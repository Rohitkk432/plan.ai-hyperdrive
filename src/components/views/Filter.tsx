import React, { useState, useMemo, useEffect } from "react";

import { ChevronDownIcon, ChevronRightIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import { IssueStates, Priorities, States, DueDate, statesType, priorityType, issueStatesType, dueDateType, filterPriorityIcons, filterStateIcons,filterIssueStatesIcons } from "@/config/filters";

import FilterTag from "@/components/views/FilterTag";

export type selectState = {
    name: string;
    icon?: any;
};

interface CustomSelectProps {
    select: selectState[];
    choosen: any[];
    setChoosen: React.Dispatch<React.SetStateAction<any>>;
    className?: string;
    modalClassName?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ select, choosen, setChoosen, className, modalClassName }) => {
    return (
        <div className={cn("absolute z-[400] bg-black shadow-lg left-[100%] top-0 -mt-1.5 ml-2 w-[13rem] flex flex-col rounded-lg border border-gray-500 p-1")}>
            {select.map((item, idx) => {
                return (
                    <div
                        className={cn(
                            "rounded-md hover:bg-light-gray cursor-pointer 3xl:text-base xl:text-sm text-xs text-white py-0.5 px-3 my-0.5 justify-between flex items-center",
                            modalClassName,
                            {
                                "bg-light-gray": choosen.includes(item.name),
                            }
                        )}
                        onClick={() => {
                            if (!choosen.includes(item.name)) {
                                setChoosen([...choosen, item.name]);
                            } else {
                                setChoosen(
                                    choosen.filter((_item) => {
                                        return _item !== item.name;
                                    })
                                );
                            }
                        }}
                        key={idx}>
                        <div className="flex items-center gap-3">
                            {item.icon}
                            {item.name}
                        </div>
                        {choosen.includes(item.name) && <CheckIcon className="w-4 h-4" />}
                    </div>
                );
            })}
        </div>
    );
};

interface FilterProps {
    openedFilter: "state" | "priority" | "issue state" | "due date" | "none";
    setOpenedFilter: React.Dispatch<React.SetStateAction<"state" | "priority" | "issue state" | "due date" | "none">>;
    statesArr: statesType[];
    setStatesArr: React.Dispatch<React.SetStateAction<statesType[]>>;
    priorityArr: priorityType[];
    setPriorityArr: React.Dispatch<React.SetStateAction<priorityType[]>>;
    issueStatesArr: issueStatesType[];
    setIssueStatesArr: React.Dispatch<React.SetStateAction<issueStatesType[]>>;
    dueDateArr: dueDateType[];
    setDueDateArr: React.Dispatch<React.SetStateAction<dueDateType[]>>;
}

export const Filter: React.FC<FilterProps> = ({ openedFilter, setOpenedFilter,dueDateArr,issueStatesArr,priorityArr,setDueDateArr,setIssueStatesArr,setPriorityArr,setStatesArr,statesArr }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setOpenedFilter("none");
        }
    }, [isOpen]);

    return (
        <div className="flex flex-col gap-4">
            <div className="relative flex items-center jusitfy-center mt-2 w-[5.5rem]">
                <div className="3xl:text-base xl:text-sm text-xs px-3 flex items-center w-[5.5rem] gap-2 py-0.5 border border-gray-500 text-gray-300 rounded-md" onClick={() => setIsOpen(!isOpen)}>
                    <div>Filter</div>
                    <ChevronDownIcon className="w-4 h-4" />
                </div>
                {isOpen && (
                    <div className="absolute 3xl:text-sm xl:text-xs text-2xs z-[400] bg-black shadow-lg top-[100%] right-0 mt-2 w-[13rem] flex flex-col rounded-lg border border-gray-500 p-1">
                        <div onClick={() => setOpenedFilter("state")} className="relative w-full flex items-center text-gray-300 px-3 py-1 my-0.5 rounded-md justify-between hover:bg-light-gray">
                            <div>State</div>
                            <ChevronRightIcon className="w-4 h-4" />
                            {openedFilter === "state" && <CustomSelect choosen={statesArr} setChoosen={setStatesArr} select={States} />}
                        </div>
                        <div onClick={() => setOpenedFilter("priority")} className="relative w-full flex items-center text-gray-300 px-3 py-1 my-0.5 rounded-md justify-between hover:bg-light-gray">
                            <div>Priority</div>
                            <ChevronRightIcon className="w-4 h-4" />
                            {openedFilter === "priority" && <CustomSelect select={Priorities} choosen={priorityArr} setChoosen={setPriorityArr} />}
                        </div>
                        <div onClick={() => setOpenedFilter("issue state")} className="relative w-full flex items-center text-gray-300 px-3 py-1 my-0.5 rounded-md justify-between hover:bg-light-gray">
                            <div>Issue State</div>
                            <ChevronRightIcon className="w-4 h-4" />
                            {openedFilter === "issue state" && <CustomSelect select={IssueStates} choosen={issueStatesArr} setChoosen={setIssueStatesArr} />}
                        </div>
                        <div onClick={() => setOpenedFilter("due date")} className="relative w-full flex items-center text-gray-300 px-3 py-1 my-0.5 rounded-md justify-between hover:bg-light-gray">
                            <div>Due Date</div>
                            <ChevronRightIcon className="w-4 h-4" />
                            {openedFilter === "due date" && <CustomSelect select={DueDate} choosen={dueDateArr} setChoosen={setDueDateArr} />}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-wrap gap-2">
                {statesArr.length > 0 && (
                    <div className="flex gap-1 items-center rounded-full bg-light-gray py-1 pr-2 pl-3">
                        <div className="3xl:text-sm xl:text-xs text-2xs text-gray-300">State:</div>
                        {statesArr.map((item, idx) => {
                            return <FilterTag all={statesArr} icon={filterStateIcons[item].icon} label={item} setRemove={setStatesArr} key={idx} />;
                        })}
                        <XMarkIcon className="cursor-pointer h-3.5 w-3.5" onClick={() => setStatesArr([])} />
                    </div>
                )}
                {priorityArr.length > 0 && (
                    <div className="flex gap-1 items-center rounded-full bg-light-gray py-1 pl-3 pr-2">
                        <div className="3xl:text-sm xl:text-xs text-2xs text-gray-300">Priority:</div>
                        {priorityArr.map((item, idx) => {
                            return <FilterTag all={priorityArr} icon={filterPriorityIcons[item].icon} label={item} setRemove={setPriorityArr} key={idx} />;
                        })}
                        <XMarkIcon className="cursor-pointer h-3.5 w-3.5" onClick={() => setPriorityArr([])} />
                    </div>
                )}
                {issueStatesArr.length > 0 && (
                    <div className="flex gap-1 items-center rounded-full bg-light-gray py-1 pl-3 pr-2">
                        <div className="3xl:text-sm xl:text-xs text-2xs text-gray-300">Issue State:</div>
                        {issueStatesArr.map((item, idx) => {
                            return <FilterTag all={issueStatesArr} icon={filterIssueStatesIcons[item].icon} label={item} setRemove={setIssueStatesArr} key={idx} />;
                        })}
                        <XMarkIcon className="cursor-pointer h-3.5 w-3.5" onClick={() => setIssueStatesArr([])} />
                    </div>
                )}
                {(statesArr.length > 0 || priorityArr.length > 0 || dueDateArr.length > 0 || issueStatesArr.length > 0) && (
                    <div
                        className="flex gap-1 cursor-pointer items-center rounded-full bg-light-gray py-1 pl-3 pr-2"
                        onClick={() => {
                            setStatesArr([]);
                            setPriorityArr([]);
                            setIssueStatesArr([]);
                            setDueDateArr([]);
                        }}>
                        <div className="3xl:text-sm xl:text-xs text-2xs text-gray-300">Clear all filters</div>
                        <XMarkIcon className="h-3.5 w-3.5" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filter;
