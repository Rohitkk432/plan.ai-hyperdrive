import type { NextPageWithLayout } from "@/types";
import { NextSeo } from "next-seo";
import RootLayout from "@/layouts/_root-layout";

import Billing from "@/components/billing/Billing";

const BillingPage: NextPageWithLayout = () => {
    return (
        <>
            <NextSeo
                title="Billing"
                description="plAn.ai - The first project management tool that gets things done"
            />
            <Billing />
        </>
    );
};

BillingPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export default BillingPage;
