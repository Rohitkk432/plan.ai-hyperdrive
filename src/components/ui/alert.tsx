import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface AlertProps {}

export default function Alert({ children }: React.PropsWithChildren<AlertProps>) {
    let [isHidden, setIsHidden] = useState(false);

    if (!isHidden) {
        return (
            <div className="relative rounded-xl bg-black py-4 pl-4 pr-8 shadow-card sm:py-6 sm:pr-10 sm:pl-6">
                {children}

                <div className="absolute top-2 right-2 cursor-pointer p-2 text-white transition-all hover:scale-105" onClick={() => setIsHidden(!isHidden)}>
                    <XMarkIcon className="h-auto w-3" />
                </div>
            </div>
        );
    } else {
        return null;
    }
}
