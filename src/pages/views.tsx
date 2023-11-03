import type { NextPageWithLayout } from "@/types";
import { NextSeo } from "next-seo";
import RootLayout from "@/layouts/_root-layout";
import Views from "@/components/views/Views";

const ViewsPage: NextPageWithLayout = () => {
    return (
        <>
            <NextSeo title="Views" description="plAn.ai - The first project management tool that gets things done" />
            <Views />
        </>
    );
};

ViewsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export default ViewsPage;
