import React, { useState, useMemo, useEffect } from "react";

import { ChevronDownIcon, ChevronRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import { IssueStates, Priorities, States, DueDate } from "@/config/filters";

export type selectState = {
    name: string;
    icon?: any;
};

interface CustomSelectProps {
    select: selectState[];
    values: selectState[];
    onChange?: () => void;
    className?: string;
    modalClassName?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ select, values, onChange, className, modalClassName }) => {
    const [currVals, setCurrVals] = useState(values);
    const [checkVals, setCheckVals] = useState(values.map((item) => item.name));

    useEffect(() => {
        if (onChange) {
            onChange();
        }
    }, [currVals]);

    return (
        <div className={cn("absolute z-[400] bg-black shadow-lg left-[100%] top-0 -mt-1.5 ml-2 w-[13rem] flex flex-col rounded-lg border border-gray-500 p-1")}>
            {select.map((item, idx) => {
                return (
                    <div
                        className={cn(
                            "rounded-md hover:bg-light-gray cursor-pointer 3xl:text-base xl:text-sm text-xs text-white py-0.5 px-3 my-0.5 justify-between flex items-center",
                            modalClassName,
                            {
                                "bg-light-gray": checkVals.includes(item.name),
                            }
                        )}
                        onClick={() => {
                            if (!checkVals.includes(item.name)) {
                                setCurrVals([...currVals, item]);
                                setCheckVals([...checkVals, item.name]);
                            } else {
                                setCurrVals(
                                    currVals.filter((_item) => {
                                        return _item.name !== item.name;
                                    })
                                );
                                setCheckVals(
                                    checkVals.filter((_item) => {
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
                        {checkVals.includes(item.name) && <CheckIcon className="w-4 h-4" />}
                    </div>
                );
            })}
        </div>
    );
};

interface FilterProps {
    openedFilter: "state" | "priority" | "issue state" | "due date" | "none";
    setOpenedFilter: React.Dispatch<React.SetStateAction<"state" | "priority" | "issue state" | "due date" | "none">>;
}

export const Filter: React.FC<FilterProps> = ({ openedFilter, setOpenedFilter }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
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
                        {openedFilter === "state" && <CustomSelect select={States} values={[]} />}
                    </div>
                    <div onClick={() => setOpenedFilter("priority")} className="relative w-full flex items-center text-gray-300 px-3 py-1 my-0.5 rounded-md justify-between hover:bg-light-gray">
                        <div>Priority</div>
                        <ChevronRightIcon className="w-4 h-4" />
                        {openedFilter === "priority" && <CustomSelect select={Priorities} values={[]} />}
                    </div>
                    <div onClick={() => setOpenedFilter("issue state")} className="relative w-full flex items-center text-gray-300 px-3 py-1 my-0.5 rounded-md justify-between hover:bg-light-gray">
                        <div>Issue State</div>
                        <ChevronRightIcon className="w-4 h-4" />
                        {openedFilter === "issue state" && <CustomSelect select={IssueStates} values={[]} />}
                    </div>
                    <div onClick={() => setOpenedFilter("due date")} className="relative w-full flex items-center text-gray-300 px-3 py-1 my-0.5 rounded-md justify-between hover:bg-light-gray">
                        <div>Due Date</div>
                        <ChevronRightIcon className="w-4 h-4" />
                        {openedFilter === "due date" && <CustomSelect select={DueDate} values={[]} />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter;
