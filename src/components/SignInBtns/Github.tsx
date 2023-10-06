import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { GithubWhiteIcon } from "@/components/icons/github-white";
import cn from "classnames";

interface GithubBtnProps {}

export const GithubBtn: React.FC<GithubBtnProps> = ({}) => {
    const { data: session } = useSession();
    return (
        <div
            onClick={() => {
                // if (!session) {
                signIn("github");
                // signOut();
                // }
            }}
            className="group flex items-center justify-center">
            <div
                className={cn("flex cursor-pointer items-center justify-start whitespace-nowrap rounded-full bg-black border-2 p-2 text-xs transition-all duration-300 xl:text-sm 3xl:text-base", {
                    "border-[#FE3E3E]": !session,
                    "border-[#6BAE63]": session,
                })}>
                <GithubWhiteIcon className="w-8 h-8" />
                <div className="w-0 overflow-hidden transition-all group-hover:pl-3 uppercase duration-700 group-hover:w-36 xl:group-hover:w-40 3xl:group-hover:w-44">
                    {!session ? "Connect Github" : "Github Connected"}
                </div>
            </div>
        </div>
    );
};

export default GithubBtn;
