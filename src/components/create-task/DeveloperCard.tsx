import React from "react";
import Logo from "@/assets/images/logos/logo.png";
import Image from "@/components/ui/image";
import { StarIcon } from "@heroicons/react/24/solid";

interface DeveloperCardProps {
    name: string;
    img: string;
    stars: string;
    number: string;
    skills: string;
    description: string;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ name, img, stars, number, skills, description }) => {
    return (
        <div className="w-full bg-[#2F2A25] rounded-2xl flex flex-col p-3 gap-2 3xl:text-base xl:text-sm text-x">
            <div className="flex items-center 3xl:text-xl xl:text-2xl text-lg w-full justify-between">
                <div className="flex items-center gap-4 font-medium">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image alt="avatar" fill className="object-cover" src={img || ""} />
                    </div>
                    <div>{name}</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center text-yellow-400 gap-1">
                        <div>{stars}</div>
                        <StarIcon className="w-5 h-5" />
                    </div>
                    <div>({number})</div>
                </div>
            </div>
            <div>
                <strong>Relevant skills:</strong> {skills}
            </div>
            <div className="bg-[#3F2710] px-4 py-2 rounded-xl">{description}</div>
        </div>
    );
};

export default DeveloperCard;
