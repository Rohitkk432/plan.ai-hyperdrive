import React from "react";
import Button from "@/components/ui/button/ButtonNew";
import Input from "@/components/ui/forms/input";
import Textarea from "@/components/ui/forms/textarea";

interface CreateViewProps {}

export const CreateView: React.FC<CreateViewProps> = ({}) => {
    return (
        <div className="z-40 w-[40rem] h-[25rem] gap-5 flex flex-col p-8 bg-black rounded-3xl shadow-2xl">
            <div className="3xl:text-2xl xl:text-xl text-lg font-medium">Create View</div>
            <Input placeholder="Title" />
            <Textarea inputClassName="resize-none" placeholder="Description" />
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
