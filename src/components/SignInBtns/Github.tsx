import React, { useEffect, useState } from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
import { GithubWhiteIcon } from "@/components/icons/github-white";
import cn from "classnames";

interface GithubBtnProps {}

export const GithubBtn: React.FC<GithubBtnProps> = ({}) => {
    // const { data: session } = useSession();
    const [ghtoken, setghtoken] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("gh_token");
        if (token) setghtoken(token);
    }, []);
    return (
        <div
            // onClick={() => {
            // if (!session) {
            // signIn("github");
            // signOut();
            // }
            // }}
            className="group flex items-center justify-center">
            <div
                className={cn(
                    "flex cursor-pointer items-center justify-start whitespace-nowrap rounded-full bg-black border-2 p-2 text-xs transition-all duration-300 xl:text-sm 3xl:text-base",
                    "border-[#6BAE63]"
                )}>
                <GithubWhiteIcon className="w-8 h-8" />
                <div className="w-0 overflow-hidden transition-all group-hover:pl-3 uppercase duration-700 group-hover:w-36 xl:group-hover:w-40 3xl:group-hover:w-44">{"Github Connected"}</div>
            </div>
        </div>
    );
};

export default GithubBtn;
