import React from "react";
import TopBar from "@/components/views/TopBar";
// import TaskList from "@/components/my-tasks/TaskList";

interface ViewsProps {}

export const Views: React.FC<ViewsProps> = ({}) => {
    return (
        <div className="w-full overflow-hidden flex flex-col items-center">
            <TopBar />
            <div className="flex w-full my-4 flex-col gap-4 overflow-y-auto overflow-x-hidden">
                {/* <TaskList /> */}
            </div>
        </div>
    );
};

export default Views;
