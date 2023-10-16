import React from "react";

interface TaskListProps {}

export const TaskList: React.FC<TaskListProps> = ({}) => {
    return (
        <div className="w-full grid grid-cols-12 items-center py-4 border-b border-gray-500 cursor-pointer px-6 gap-2 bg-black 3xl:text-base xl:text-sm text-xs">
            <div className="text-gray-400">DefiOs</div>
            <div className="col-span-6">Create an API Workflow</div>
            <div className="px-1 py-2 flex rounded-lg  items-center justify-center bg-red-700 font-medium">Open Source</div>
            <div className="flex w-full justify-center items-center text-green-400 col-span-2">$200</div>
            <div className="col-span-2"></div>
        </div>
    );
};

export default TaskList;
