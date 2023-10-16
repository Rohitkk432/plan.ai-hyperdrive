import React from "react";
import { NoSymbolIcon, CubeTransparentIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/images/logos/logo.png";
import Image from "@/components/ui/image";

interface TaskListProps {}

export const TaskList: React.FC<TaskListProps> = ({}) => {
    return (
        <div className="w-full grid grid-cols-11 items-center py-4 border-b border-gray-500 cursor-pointer px-6 gap-2 bg-black 3xl:text-base xl:text-sm text-xs">
            <div className="text-gray-400">PT-3</div>
            <div className="col-span-6">E2E testing with selenium</div>
            <div className="px-1 py-1.5 flex rounded-lg  items-center justify-center bg-red-700 font-medium">Open Source</div>
            <div className="flex w-full justify-center items-center text-green-400 border-gray-500 border py-1 rounded-lg">$400</div>
            <div className="col-span-2 flex gap-2.5 items-center justify-end">
                <div className="p-1 w-fit rounded-lg border border-gray-700 text-gray-500">
                    <NoSymbolIcon className="w-6 h-6" />
                </div>
                <div className="p-1 px-3 w-fit rounded-lg border flex items-center gap-2 border-gray-700 text-gray-500">
                    <CubeTransparentIcon className="w-6 h-6" />
                    <div>Backlog</div>
                </div>
                <div className="p-1.5 w-fit grayscale rounded-lg bg-gray-700 border border-gray-700 text-gray-300">
                    <div className="w-5">
                        <Image
                            width={0}
                            height={0}
                            alt="icon"
                            style={{ width: "100%", height: "auto" }} // optional
                            sizes="100vw"
                            src={Logo}
                        />
                    </div>
                </div>
                <EllipsisHorizontalIcon className="w-6" />
            </div>
        </div>
    );
};

export default TaskList;
