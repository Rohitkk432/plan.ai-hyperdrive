import type { NextPageWithLayout } from "@/types";
import { NextSeo } from "next-seo";
import RootLayout from "@/layouts/_root-layout";

import Create from "@/components/create-task/Create";

const CreateTasksPage: NextPageWithLayout = () => {
    return (
        <>
            <NextSeo title="Create Tasks" description="plAn.ai - The first project management tool that gets things done" />
            <Create />
        </>
    );
};

CreateTasksPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export default CreateTasksPage;
