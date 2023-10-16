import dynamic from 'next/dynamic';
import Loader from '@/components/ui/loader';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setGithub } from '@/store/userInfoSlice';
import axios from '@/lib/axiosClient';
import ContractProcess from "@/components/contract-overlay/contract-process";

// dynamic imports
const ModernLayout = dynamic(() => import("@/layouts/_modern"), {
    loading: () => <FallbackLoader />,
});

function FallbackLoader() {
    return (
        <div className="fixed z-50 grid h-full w-full place-content-center">
            <Loader variant="blink" />
        </div>
    );
}

export default function RootLayout({ children, contentClassName }: React.PropsWithChildren<{ contentClassName?: string }>) {
    const isMounted = useIsMounted();
    const wallet = useWallet();
    const { data: session } = useSession();
    const dispatch = useAppDispatch();

    const githubInfo = useAppSelector((state) => state.userInfo.githubInfo);

    useEffect(() => {
        const gh_token = localStorage.getItem("gh_token");
        console.log("in ", gh_token);
        if (
            //@ts-ignore
            (session?.provider === "github" || gh_token?.includes("gho_")) &&
            githubInfo === null
        ) {
            //@ts-ignore
            if (session?.provider === "github") {
                //@ts-ignore
                localStorage.setItem("gh_token", session?.accessToken);

                axios
                    .get("https://api.github.com/user", {
                        headers: {
                            //@ts-ignore
                            Authorization: `Bearer ${session?.accessToken}`,
                        },
                    })
                    .then((res) => {
                        dispatch(setGithub(res.data));
                    })
                    .catch((err) => console.log(err));
            } else {
                axios
                    .get("https://api.github.com/user", {
                        headers: {
                            //@ts-ignore
                            Authorization: `Bearer ${gh_token}`,
                        },
                    })
                    .then((res) => {
                        dispatch(setGithub(res.data));
                    })
                    .catch((err) => console.log(err));
            }
        }
    }, [session, dispatch]);

    // fix the `Hydration failed because the initial UI does not match` issue
    if (!isMounted) return null;

    // render default layout which is modern
    return (
        <>
            <ModernLayout contentClassName={contentClassName}>{children}</ModernLayout>
            <ContractProcess />
        </>
    );
}
