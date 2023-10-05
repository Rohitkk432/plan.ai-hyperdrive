import type { NextPageWithLayout } from "@/types";
import { NextSeo } from "next-seo";
import RootLayout from "@/layouts/_root-layout";
import Image from "@/components/ui/image";
import AnchorLink from "@/components/ui/links/anchor-link";
import routes from "@/config/routes";
import Button from "@/components/ui/button";
import { useIsMounted } from "@/lib/hooks/use-is-mounted";
import ErrorDarkImage from "@/assets/images/404/404-dark.svg";

const ErrorPage: NextPageWithLayout = () => {
    const isMounted = useIsMounted();
    return (
        <>
            <NextSeo title="404 Error! No Result Found" description="React Next Web3 NFT Crypto Dashboard Template" />

            <div className="flex max-w-full flex-col items-center justify-center text-center">
                <div className="relative w-52 max-w-full sm:w-[400px] xl:w-[450px] 4xl:w-[500px]">{isMounted && <Image src={ErrorDarkImage} alt="404 Error" />}</div>

                <h2 className="mt-5 mb-2 text-base font-medium uppercase tracking-wide text-white sm:mt-10 sm:mb-4 sm:text-xl 4xl:mt-12 4xl:text-2xl">Error! No Result Found</h2>
                <p className="mb-4 max-w-full text-xs leading-loose tracking-tight text-gray-400 sm:mb-6 sm:w-[430px] sm:text-sm sm:leading-loose">
                    Sorry, the page you are looking for might be renamed, removed, or might never exist.
                </p>
                <AnchorLink
                    href={{
                        pathname: routes.learn,
                    }}>
                    <Button shape="rounded">Back to Learn page</Button>
                </AnchorLink>
            </div>
        </>
    );
};

ErrorPage.getLayout = function getLayout(page) {
    return <RootLayout contentClassName="flex items-center justify-center">{page}</RootLayout>;
};

export default ErrorPage;