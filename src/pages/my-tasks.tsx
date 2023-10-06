import type { NextPageWithLayout } from "@/types";
import { NextSeo } from "next-seo";
import RootLayout from "@/layouts/_root-layout";

const MyTasksPage: NextPageWithLayout = () => {
    return (
        <>
            <NextSeo title="My Tasks" description="plAn.ai - The first project management tool that gets things done" />
            <div>My Tasks</div>
        </>
    );
};

MyTasksPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export default MyTasksPage;
