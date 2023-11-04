import React, { useState } from "react";
import Button from "@/components/ui/button/ButtonNew";
import Input from "@/components/ui/forms/input";
import Textarea from "@/components/ui/forms/textarea";

import Filter from "@/components/views/Filter";

interface CreateViewProps {}

export const CreateView: React.FC<CreateViewProps> = ({}) => {
    const [openedFilter, setOpenedFilter] = useState<"state" | "priority" | "issue state" | "due date" | "none">("none");

    return (
        <div
            // onClick={(e) => {
            //     e.stopPropagation();
            //     setOpenedFilter("none");
            // }}
            className="z-40 w-[40rem] h-[20rem] gap-3 flex flex-col p-6 bg-black rounded-2xl shadow-2xl">
            <div className="3xl:text-xl xl:text-lg text-base font-medium">Create View</div>
            <Input placeholder="Title" />
            <Input placeholder="Description" />
            <Filter openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} />
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
