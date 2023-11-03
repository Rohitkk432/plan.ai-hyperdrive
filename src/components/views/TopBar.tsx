import React from "react";
import Button from "@/components/ui/button/ButtonNew";
import { PlusIcon, ArrowLeftCircleIcon, BriefcaseIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useDrawer } from "@/components/drawer-views/context";

interface TopBarProps {}

export const TopBar: React.FC<TopBarProps> = ({}) => {
    const { openDrawer } = useDrawer();

    return (
        <div className="w-full flex items-center justify-between px-6 py-3 mx-3 border-2 border-t-0 border-primary rounded-b-3xl">
            <div className="flex items-center gap-3 3xl:text-xl xl:text-lg text-base font-medium">
                <ArrowLeftCircleIcon className="w-10 h-10 mr-2 cursor-pointer" />
                <BriefcaseIcon className="w-8 h-8" />
                <div className="cursor-pointer">Projects</div>
                <ChevronLeftIcon className="w-8 h-8 text-primary" />
                <div className="cursor-pointer">Project Name</div>
                <ChevronLeftIcon className="w-8 h-8 text-primary" />
                <div className="text-primary">Views</div>
            </div>
            <Button onClick={() => openDrawer("CREATE_VIEW", "center", "glass")} color="PrimaryOutline">
                <PlusIcon className="w-5 h-5" />
                Create View
            </Button>
        </div>
    );
};

export default TopBar;
