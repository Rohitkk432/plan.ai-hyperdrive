import React from 'react';
import Image from '@/components/ui/image';
import AnchorLink from '@/components/ui/links/anchor-link';

import Solana from "@/assets/images/landing/trusted1.png";
import SuperteamEarn from "@/assets/images/landing/trusted2.png";
import Superteam from "@/assets/images/landing/trusted3.png";
import DefiOS from "@/assets/images/landing/logo-full.png";

interface TrustedPartnersProps {}

export const TrustedPartners: React.FC<TrustedPartnersProps> = ({}) => {
  return (
    <div className="z-[20] flex w-screen flex-col items-center justify-center bg-black">
      <div className="mt-10 text-sm uppercase text-primary xl:text-base 3xl:text-lg">
        Trusted by the best teams
      </div>
      <div className="mb-8 mt-12 px-6 xl:mt-20 flex flex-wrap flex items-center justify-center gap-8 xl:gap-10 grayscale">
        <AnchorLink
          href={'https://solana.com/'}
          className="h-6"
          target="_blank"
        >
          <Image
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '100%' }} // optional
            src={Solana}
          />
        </AnchorLink>
        <AnchorLink
          href={'https://earn.superteam.fun/'}
          className="h-7"
          target="_blank"
        >
          <Image
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '100%' }}
            src={SuperteamEarn}
          />
        </AnchorLink>
        <AnchorLink
          href={'https://superteam.fun/'}
          className="h-8"
          target="_blank"
        >
          <Image
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '100%' }}
            src={Superteam}
          />
        </AnchorLink>
        <AnchorLink
          href={'https://defi-os.com/'}
          className="h-10"
          target="_blank"
        >
          <Image
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '100%' }} // optional
            src={DefiOS}
          />
        </AnchorLink>
      </div>
    </div>
  );
};

export default TrustedPartners;
