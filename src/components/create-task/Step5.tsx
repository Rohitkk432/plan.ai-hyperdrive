import React, { useState, useEffect, useMemo } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import EmptyList from "@/components/icons/EmptyList";

import Uploader from "@/components/ui/forms/uploader";
import Input from "@/components/ui/forms/input";
import Textarea from "@/components/ui/forms/textarea";
import Image from "next/image";
import Spinner from "@/components/custom/spinner";
import cn from "classnames";
import Button from "@/components/ui/button/ButtonNew";
import { ToggleSwitch } from "@/components/ui/button/toggle-switch";
import { uploadMetadataToIPFS } from "@/lib/helpers/metadata";

import Logo from "@/assets/images/logos/logo.png";

import { useRouter } from "next/router";
import axios from "@/lib/axiosClient";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { onLoading, onFailure, onSuccess, resetLoader } from "@/store/callLoaderSlice";
import { useSession } from "next-auth/react";
import { createBounty } from "@/lib/helpers/contractInteract";
import { PublicKey } from "@solana/web3.js";
import { selectUserMapping } from "@/store/userMappingSlice";
import { useWallet } from "@solana/wallet-adapter-react";

interface Step5Props {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step5: React.FC<Step5Props> = ({ setStep }) => {
    const { data: session } = useSession();
    const router = useRouter();
    const wallet = useWallet();
    const dispatch = useAppDispatch();
    const step1Data = useAppSelector((state) => state.taskCreation.step1);
    const step2Data = useAppSelector((state) => state.taskCreation.step2);
    const userMappingState = useAppSelector(selectUserMapping);
    const [creating, setCreating] = useState(true);

    const AddMetadataDataToIPFS = async () => {
        const metadataHash = await uploadMetadataToIPFS({
            issue_title: step1Data.issueTitle,
            issue_details: step1Data.selectedIssue,
            repo_name: step1Data.repoName,
            repo_link: step1Data.repoLink,
            repo_id: step1Data.repoId,
            repo_details: step1Data.selectedRepo,
            additional_comments: step1Data.additionalComments,
            anonymised_description: step2Data.anonymizedDescription,
        });
        return `https://ipfs.io/ipfs/${metadataHash}`;
    };

    const createTaskBounty = async () => {
        // dispatch(onLoading("Creating Task..."));
        setCreating(true);
        let hadError = false;

        const metadataIpfsHash = await AddMetadataDataToIPFS().catch((err) => {
            hadError = false;
            // dispatch(
            //     onFailure({
            //         label: "Metadata IPFS pinning Failed",
            //         description: err.message,
            //         link: "",
            //         redirect: "/my-task",
            //     })
            // );
            return "";
        });

        if (hadError) return;

        await createBounty(new PublicKey(userMappingState.userMapping?.userPubkey as string), step2Data.funds, metadataIpfsHash, step1Data.issueTitle)
            .then((res) => {
                setCreating(false);
                // dispatch(
                //     onSuccess({
                //         label: "Task Creation Success",
                //         description: "check out created task at",
                //         link: res ? `https://solscan.io/tx/${res.toString()}?cluster=devnet` : "",
                //         redirect: null,
                //     })
                // );
            })
            .catch((err) => {
                // dispatch(
                //     onFailure({
                //         label: "Task Creation Failed",
                //         description: err.message,
                //         link: "",
                //         redirect: "/my-task",
                //     })
                // );
            });
    };

    useEffect(() => {
        if (wallet.publicKey) {
            createTaskBounty();
        }
    }, [wallet]);

    return (
        <div className="absolute z-[40] flex h-full w-full flex-col gap-4 rounded-xl bg-black p-8 text-sm xl:text-base 3xl:text-lg">
            <div className="lineGradientHorizontal mt-10 h-0.5 w-full"></div>
            <div className="my-5 flex flex-col items-center gap-4 px-4 text-xs xl:text-sm 3xl:text-base">
                <div>sending task...</div>
                <div>checking skill validators..</div>
                <div>checking stake...</div>
                <div>sending on-chain instructions...</div>
                <div>matching with developers...</div>
                <div>finding backup developers...</div>
                <div>checking skills...</div>
                <div>preparing deployment...</div>
                <div>tokens matched with skilled developers.</div>
                <div className="text-green-500">completed.</div>
            </div>
            <div className="flex flex-col items-center gap-6 text-xs xl:text-sm 3xl:text-base">
                <div
                    className={cn("relative w-28 overflow-hidden rounded-full", {
                        "animate-spin": creating,
                    })}>
                    <Image
                        width={0}
                        height={0}
                        alt="screen"
                        style={{ width: "100%", height: "auto" }} // optional
                        sizes="100vw"
                        src={Logo}
                    />
                </div>
                {!creating && (
                    <Button size="small" onClick={() => router.push("/my-tasks")} color="PrimarySolid">
                        View Task
                    </Button>
                )}
                <div className="lineGradientHorizontal h-0.5 w-full"></div>
            </div>
        </div>
    );
};

export default Step5;
