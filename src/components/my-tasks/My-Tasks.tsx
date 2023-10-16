import React from "react";
import TopBar from "@/components/my-tasks/TopBar";
import TaskList from "@/components/my-tasks/TaskList";

interface MyTasksProps {}

export const MyTasks: React.FC<MyTasksProps> = ({}) => {
    return (
        <div className="w-full h-screen overflow-hidden flex flex-col items-center">
            <TopBar />
            <div className="flex w-full my-4 flex-col gap-4 h-full overflow-y-auto overflow-x-hidden">
                <TaskList />
                <TaskList />
                <TaskList />
            </div>
        </div>
    );
};

export default MyTasks;
