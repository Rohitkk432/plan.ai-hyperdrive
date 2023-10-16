import React from "react";
import cn from "classnames";
import Logo from "@/assets/images/logos/logo.png";
import Image from "@/components/ui/image";

interface ExpandableBtnProps {
    label: string;
    size?: "large" | "small";
    height?: "small" | "normal";
}

export const ExpandableBtn: React.FC<ExpandableBtnProps> = ({ label, size = "small", height = "normal" }) => {
    return (
        <div className="group flex items-center justify-center">
            <div
                className={cn("flex cursor-pointer items-center justify-start whitespace-nowrap rounded-full bg-black border-2 gradient-yellow-green transition-all duration-300 font-semibold", {
                    "text-sm xl:text-base 3xl:text-lg p-2 px-2.5": height === "normal",
                    "text-xs xl:text-sm 3xl:text-base p-1.5 px-2": height === "small",
                })}>
                <div className={cn(height === "small" ? "w-5" : "w-6")}>
                    <Image
                        width={0}
                        height={0}
                        alt="screen"
                        style={{ width: "100%", height: "auto" }} // optional
                        sizes="100vw"
                        src={Logo}
                    />
                </div>
                {size === "small" && (
                    <div className="w-0 text-gradient-yellow-green overflow-hidden transition-all group-hover:pl-3 duration-700 group-hover:w-40 xl:group-hover:w-44 3xl:group-hover:w-48">{label}</div>
                )}
                {size === "large" && (
                    <div className="w-0 text-gradient-yellow-green overflow-hidden transition-all group-hover:pl-3 duration-700 group-hover:w-48 xl:group-hover:w-52 3xl:group-hover:w-56">{label}</div>
                )}
            </div>
        </div>
    );
};

export default ExpandableBtn;
