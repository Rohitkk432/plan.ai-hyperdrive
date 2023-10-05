import dynamic from 'next/dynamic';
import Loader from '@/components/ui/loader';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setGithub } from '@/store/userInfoSlice';
import axios from '@/lib/axiosClient';

// import ContractProcess from '@/components/contract-overlay/contract-process';
// dynamic imports
const ModernLayout = dynamic(() => import('@/layouts/_modern'), {
  loading: () => <FallbackLoader />,
});

function FallbackLoader() {
  return (
    <div className="fixed z-50 grid h-full w-full place-content-center">
      <Loader variant="blink" />
    </div>
  );
}

export default function RootLayout({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) {
  const isMounted = useIsMounted();
  const wallet = useWallet();
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  const githubInfo = useAppSelector((state) => state.userInfo.githubInfo);

  useEffect(() => {
    if (
      //@ts-ignore
      session?.accessToken &&
      (githubInfo === null ||
        //@ts-ignore
        session?.user?.id !== githubInfo.id)
    ) {
      axios
        .get('https://api.github.com/user', {
          headers: {
            //@ts-ignore
            Authorization: `Bearer ${session?.accessToken}`,
          },
        })
        .then((res) => {
          dispatch(setGithub(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [session, dispatch]);

  // fix the `Hydration failed because the initial UI does not match` issue
  if (!isMounted) return null;

  // render default layout which is modern
  return (
    <>
      <ModernLayout contentClassName={contentClassName}>
        {children}
      </ModernLayout>
      {/* <ContractProcess /> */}
    </>
  );
}
