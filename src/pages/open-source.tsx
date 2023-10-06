import type { NextPageWithLayout } from "@/types";
import { NextSeo } from "next-seo";
import RootLayout from "@/layouts/_root-layout";

const OpenSourcePage: NextPageWithLayout = () => {
    return (
        <>
            <NextSeo title="Open Source" description="plAn.ai - The first project management tool that gets things done" />
            <div>Open Source</div>
        </>
    );
};

OpenSourcePage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export default OpenSourcePage;
