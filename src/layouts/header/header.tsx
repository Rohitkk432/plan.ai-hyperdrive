import { useRouter } from 'next/router';
import cn from 'classnames';
import Logo from '@/components/ui/logo';
import { useWindowScroll } from '@/lib/hooks/use-window-scroll';
import Hamburger from '@/components/ui/hamburger';
import AnchorLink from '@/components/ui/links/anchor-link';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useDrawer } from '@/components/drawer-views/context';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import routes from '@/config/routes';
import { setSigner, setConnection } from '@/lib/helpers/wallet';
import { useAppSelector, useAppDispatch } from '@/store/store';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

function HeaderRightArea() {
  const router = useRouter();
  const { data: session } = useSession();
  const wallet = useWallet();
  const { connection } = useConnection();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (wallet.publicKey)
      setSigner(
        wallet.publicKey,
        wallet.signTransaction,
        wallet.signAllTransactions
      );
    if (connection) setConnection(connection);
  }, [wallet.publicKey, connection]);

  return (
      <div className="flex flex-col items-end gap-6 xl:gap-7 2xl:gap-8 3xl:gap-10">
          <div className="relative mt-5 flex shrink-0 items-center justify-end gap-4 gap-3 2xl:gap-8">
              <WalletMultiButton className="gradient-border-box border-0.5 h-10 rounded-full bg-black 2xl:h-12" />
          </div>
      </div>
  );
}

export default function Header({ className }: { className?: string }) {
    const router = useRouter();
    const isMounted = useIsMounted();
    const { openDrawer } = useDrawer();
    const windowScroll = useWindowScroll();
    return (
        <nav
            className={cn(
                "relative top-0 right-0 z-30 h-[5rem] w-full transition-all duration-300"
                // isMounted && windowScroll.y
                //   ? 'bg-gradient-to-b from-dark to-dark/80 shadow-card backdrop-blur'
                //   : '',
            )}>
            <div className="flex full items-start justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <div className="m-5 ml-0 block lg:hidden">
                        <Hamburger isOpen={false} variant="solid" onClick={() => openDrawer("DASHBOARD_SIDEBAR", "left")} className="text-white" />
                    </div>
                    {/* <div onClick={() => router.push(routes.home)} className="mr-4 flex items-center lg:hidden">
                        <Logo />
                    </div> */}
                </div>
                <HeaderRightArea />
            </div>
        </nav>
    );
}
