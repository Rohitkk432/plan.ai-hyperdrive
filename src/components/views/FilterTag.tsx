import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import cn from "classnames";

interface FilterTagProps {
    label: string;
    icon: any;
    all: any[];
    setRemove?: React.Dispatch<React.SetStateAction<any>>;
}

export const FilterTag: React.FC<FilterTagProps> = ({ label, icon, setRemove, all }) => {
    const className =
        label === "Backlog"
            ? "!text-[#5e6ad2] !bg-[#20212E]"
            : label === "Todo"
            ? "!text-[#eb5757] !bg-[#311F1F]"
            : label === "InProgress"
            ? "!text-[#26b5ce] !bg-[#192B2E]"
            : label === "Done"
            ? "!text-[#f2c94c] !bg-[#322D1E]"
            : label === "Cancelled"
            ? "!text-[#4cb782] !bg-[#1E2B24]"
            : label === "Urgent"
            ? "!text-[#cd3d3d] !bg-[#422020]"
            : label === "High"
            ? "!text-[#CA4416] !bg-[#442916]"
            : label === "Medium"
            ? "!text-[#DA9D0B] !bg-[#413614]"
            : label === "Low"
            ? "!text-[#21B144] !bg-[#193925]"
            : label === "None"
            ? "!text-gray-400 !bg-[#0B0B0B]"
            : label === "OpenSource"
            ? "!text-[#26b5ce] !bg-[#192B2E]"
            : label === "Proprietary"
            ? "!text-[#DA9D0B] !bg-[#413614]"
            : "";

    return (
        <div
            className={cn("flex items-center rounded-full gap-1 px-1 pl-2 py-0.5 3xl:text-xs xl:text-2xs text-3xs text-gray-400 bg-gray-900", className, {
                "cursor-pointer": setRemove !== undefined,
            })}
            onClick={() => {
                if (setRemove !== undefined) {
                    const removed = all.filter((item) => item !== label);
                    setRemove(removed);
                }
            }}>
            <div className="flex items-center gap-2">
                {icon}
                <div>{label}</div>
            </div>
            {setRemove !== undefined && <XMarkIcon className="w-3.5 h-3.5 cursor-pointer" />}
        </div>
    );
};

export default FilterTag;
