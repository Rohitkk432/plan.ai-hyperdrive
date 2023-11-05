import React, { useState } from "react";
import Button from "@/components/ui/button/ButtonNew";
import Input from "@/components/ui/forms/input";
import Textarea from "@/components/ui/forms/textarea";

import Filter from "@/components/views/Filter";

import { statesType, priorityType, issueStatesType, dueDateType } from "@/config/filters";

interface CreateViewProps {}

export const CreateView: React.FC<CreateViewProps> = ({}) => {
    const [openedFilter, setOpenedFilter] = useState<"state" | "priority" | "issue state" | "due date" | "none">("none");

    const [statesArr, setStatesArr] = useState<statesType[]>([]);
    const [priorityArr, setPriorityArr] = useState<priorityType[]>([]);
    const [issueStatesArr, setIssueStatesArr] = useState<issueStatesType[]>([]);
    const [dueDateArr, setDueDateArr] = useState<dueDateType[]>([]);

    return (
        <div
            // onClick={(e) => {
            //     e.stopPropagation();
            //     setOpenedFilter("none");
            // }}
            className="z-40 w-[40rem] min-h-[20rem] gap-3 flex flex-col p-6 bg-black rounded-2xl shadow-2xl">
            <div className="3xl:text-xl xl:text-lg text-base font-medium">Create View</div>
            <Input placeholder="Title" />
            <Input placeholder="Description" />
            <Filter
                openedFilter={openedFilter}
                setOpenedFilter={setOpenedFilter}
                statesArr={statesArr}
                setStatesArr={setStatesArr}
                priorityArr={priorityArr}
                setPriorityArr={setPriorityArr}
                issueStatesArr={issueStatesArr}
                setIssueStatesArr={setIssueStatesArr}
                dueDateArr={dueDateArr}
                setDueDateArr={setDueDateArr}
            />
            <div className="mt-auto gap-6  flex items-center justify-end">
                <Button size="small" color="PrimaryOutline">
                    Cancel
                </Button>
                <Button size="small" color="PrimarySolid">
                    Create View
                </Button>
            </div>
        </div>
    );
};

export default CreateView;
