import React from "react";
import LogoFull from "@/assets/images/logos/logo-full.svg";
import Image from "@/components/ui/image";

import AnchorLink from "@/components/ui/links/anchor-link";

interface NavProps {
    handleFeatureClick: any;
}

export const Nav: React.FC<NavProps> = ({ handleFeatureClick }) => {
    return (
        <div className="mt-5 inline-flex w-full items-center justify-between px-[1rem] sm:px-[3rem]">
            <AnchorLink href={"#"} className="h-9 xs:h-10 md:h-11 xl:h-12 3xl:h-14">
                <Image
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "100%" }} // optional
                    src={LogoFull}
                />
            </AnchorLink>
            <div className="mr-0 sm:mr-10 md:mr-20 flex items-center justify-center gap-3 sm:gap-5 md:gap-7 text-xs md:text-sm font-normal whitespace-pre tracking-tight text-white xl:text-base 3xl:text-lg">
                <div onClick={handleFeatureClick} className="cursor-pointer">
                    features
                </div>
                <AnchorLink href={"#"}>
                    <div className="cursor-pointer">how it works</div>
                </AnchorLink>
                <AnchorLink href={"#"}>
                    <div className="cursor-pointer">docs</div>
                </AnchorLink>
                <AnchorLink href={"#"}>
                    <div className="cursor-pointer">pricing</div>
                </AnchorLink>
            </div>
            <AnchorLink
                href={"mailto:hellodefiOS@gmail.com"}
                className="flex items-center justify-center text-xs md:text-sm font-medium whitespace-pre tracking-tight text-primary xl:text-base 3xl:text-lg">
                <div>say hi!</div>
            </AnchorLink>
        </div>
    );
};

export default Nav;
