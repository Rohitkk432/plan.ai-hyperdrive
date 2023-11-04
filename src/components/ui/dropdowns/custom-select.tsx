import React, { useState, useEffect } from "react";
import cn from "classnames";
import { CheckIcon } from "@heroicons/react/24/outline";

export type selectState = {
    name: string;
    icon?: any;
};

interface CustomSelectProps {
    select: selectState[];
    value: selectState;
    onChange?: () => void;
    className?: string;
    modalClassName?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ select, value, onChange, className, modalClassName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currVal, setCurrVal] = useState(value);

    useEffect(() => {
        if (onChange) {
            onChange();
        }
    }, [currVal]);

    return (
        <div className="relative flex items-center jusitfy-center">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={cn("bg-light-gray cursor-pointer 3xl:text-base xl:text-sm text-xs rounded-md text-white gap-3 px-3 py-0.5 flex items-center", className)}>
                {currVal.icon}
                {currVal.name}
            </div>
            {isOpen && (
                <div className={cn("absolute z-[400] bg-black shadow-lg top-[100%] mt-2 w-[13rem] flex flex-col rounded-lg border border-gray-500 p-1")}>
                    {select.map((item, idx) => {
                        return (
                            <div
                                className={cn(
                                    "rounded-md hover:bg-light-gray cursor-pointer 3xl:text-base xl:text-sm text-xs text-white py-0.5 px-3 my-0.5 justify-between flex items-center",
                                    modalClassName,
                                    {
                                        "bg-light-gray": item.name === currVal.name,
                                    }
                                )}
                                onClick={() => {
                                    if (item.name !== currVal.name) {
                                        setCurrVal(item);
                                        setIsOpen(false);
                                    }
                                }}
                                key={idx}>
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    {item.name}
                                </div>
                                {item.name === currVal.name && <CheckIcon className="w-4 h-4" />}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
