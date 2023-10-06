import React from "react";
import { signIn, useSession } from "next-auth/react";
import { JiraWhiteIcon } from "@/components/icons/jira-white";
import cn from "classnames";

interface JiraBtnProps {}

export const JiraBtn: React.FC<JiraBtnProps> = ({}) => {
    const { data: session } = useSession();
    return (
        <div
            // onClick={() => {
            //     if (!(session as any)?.accessTokenAtlassian) {
            //         signIn("atlassian");
            //     }
            // }}
            className="group flex items-center justify-center">
            <div
                className={cn("flex cursor-pointer items-center justify-start whitespace-nowrap rounded-full bg-black border-2 p-2 text-xs transition-all duration-300 xl:text-sm 3xl:text-base", {
                    "border-[#FE3E3E]": !(session as any)?.accessTokenAtlassian,
                    "border-[#6BAE63]": (session as any)?.accessTokenAtlassian,
                })}>
                <JiraWhiteIcon className="w-8 h-8" />
                <div className="w-0 overflow-hidden transition-all group-hover:pl-3 uppercase duration-700 group-hover:w-32 xl:group-hover:w-36 3xl:group-hover:w-40">
                    {!(session as any)?.accessTokenAtlassian ? "Connect Jira" : "Jira Connected"}
                </div>
            </div>
        </div>
    );
};

export default JiraBtn;
