import React from "react";
import { useDrawer } from "@/components/drawer-views/context";

import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface TaskSidebarProps {}

export const TaskSidebar: React.FC<TaskSidebarProps> = ({}) => {
    const { closeDrawer } = useDrawer();

    return (
        <div className="fixed top-0 right-0 bottom-0 z-40 w-[50vw] overflow-y-auto overflow-x-hidden flex flex-col p-5 bg-black border-l border-primary shadow-xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <ArrowLeftIcon className="w-5 h-5 cursor-pointer" onClick={closeDrawer} />
                    <Link href="/my-tasks/1" className="focus-visible:outline-0">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TaskSidebar;
