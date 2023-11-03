import React, { useEffect, useState } from "react";
import { PhantomWhiteIcon } from "@/components/icons/phantom-white";
import cn from "classnames";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

interface PhantomBtnProps {}

export const PhantomBtn: React.FC<PhantomBtnProps> = ({}) => {
    const wallet = useWallet();
    const { setVisible: setModalVisible } = useWalletModal();
    return (
        <div
            onClick={() => {
                if (!wallet.publicKey) {
                    setModalVisible(true);
                }
            }}
            className="group flex items-center justify-center">
            <div
                className={cn(
                    "flex cursor-pointer items-center justify-start whitespace-nowrap rounded-full bg-black border-2 p-2 text-xs transition-all duration-300 xl:text-sm 3xl:text-base",
                    "border-[#6BAE63]",
                    {
                        "border-[#FE3E3E]": !wallet.publicKey,
                        "border-[#6BAE63]": wallet.publicKey,
                    }
                )}>
                <PhantomWhiteIcon className="w-7 h-7 m-0.5" />
                <div className="w-0 overflow-hidden transition-all group-hover:pl-3 uppercase duration-700 group-hover:w-40 xl:group-hover:w-44 3xl:group-hover:w-48">
                    {!wallet.publicKey ? "Connect Wallet" : "Wallet Connected"}
                </div>
            </div>
        </div>
    );
};

export default PhantomBtn;
