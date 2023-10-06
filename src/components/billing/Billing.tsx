import React from "react";
import { WalletIcon } from "@heroicons/react/24/outline";

import Input from "@/components/ui/forms/input";
import Button from "@/components/ui/button/ButtonNew";

import ComparisonChart from "@/components/ui/charts/comparison-chart";

interface BillingProps {}

export const Billing: React.FC<BillingProps> = ({}) => {
    return (
        <div className="px-6 gap-10 w-full flex flex-col overflow-y-auto mb-16">
            <div className="flex w-full items-center justify-center gap-4">
                <WalletIcon className="text-primary 3xl:w-8 3xl:h-8 xl:w-7 xl:h-7 w-6 h-6 text-2xl" />
                <div className="3xl:text-2xl xl:text-xl text-lg font-bold">Billing</div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">API Key</div>
                <div className="flex items-center justify-between gap-x-8 gap-y-2 border rounded-lg border-light-gray bg-black p-4">
                    <div className="flex items-start gap-3">
                        <div className="flex flex-col gap-2">
                            <h4 className="3xl:text-lg xl:text-base text-sm font-semibold">Enter your OpenAI API key</h4>
                            <p className="3xl:text-sm xl:text-xs text-2xs tracking-tight">Only OpenAI APIs are supported right now.</p>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <Input id="openAIApiKey" name="openAiApiKey" type="text" className="!p-3 rounded-md font-medium" placeholder="OpenAI API Key" />
                    </div>
                </div>
                <div className="flex items-center flex-col w-full gap-5 border rounded-lg border-light-gray bg-black p-4">
                    <div className="flex items-start w-full gap-3">
                        <div className="flex flex-col gap-2">
                            <h4 className="3xl:text-lg xl:text-base text-sm font-semibold">Check API usage</h4>
                            <p className="3xl:text-sm xl:text-xs text-2xs tracking-tight">OpenAI APIs are used for all AI functions on plAn</p>
                        </div>
                    </div>
                    <ComparisonChart />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">On Ramp</div>
                <div className="flex items-center justify-between gap-x-8 gap-y-2 border rounded-lg border-light-gray bg-black p-4">
                    <div className="flex items-start gap-3">
                        <div className="flex flex-col gap-2">
                            <h4 className="3xl:text-lg xl:text-base text-sm font-semibold">Buy USDC</h4>
                            <p className="3xl:text-sm xl:text-xs text-2xs tracking-tight">Developers are paid through USDC that&apos;s stored in your custodial wallet.</p>
                        </div>
                    </div>
                    <div className="w-[15%]">
                        <Button color="PrimarySolid" fullWidth>
                            Buy
                        </Button>
                    </div>
                </div>

                <div className="flex items-center flex-col w-full gap-5 border rounded-lg border-light-gray bg-black p-4">
                    <div className="flex items-start w-full gap-3">
                        <div className="flex flex-col gap-2">
                            <h4 className="3xl:text-lg xl:text-base text-sm font-semibold">Check USDC balance & Usage</h4>
                            <p className="3xl:text-sm xl:text-xs text-2xs tracking-tight">Check how your money is being used to get work done</p>
                        </div>
                    </div>
                    <ComparisonChart />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">Set Limits</div>
                <div className="flex items-center justify-between gap-x-8 gap-y-2 border rounded-lg border-light-gray bg-black p-4">
                    <div className="flex items-start gap-3">
                        <div className="flex flex-col gap-2">
                            <h4 className="3xl:text-lg xl:text-base text-sm font-semibold">Set Global Monthly Spending Limit</h4>
                            <p className="3xl:text-sm xl:text-xs text-2xs tracking-tight">
                                Choose the maximum amount (in $) you want your company to
                                <br />
                                spend per month on plAn. Money exceeding this amount won&apos;t be used.
                            </p>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <Input id="globalSpendingLimit" name="globalSpendingLimit" type="number" className="!p-3 rounded-md font-medium" placeholder="amount in $" />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-x-8 gap-y-2 border rounded-lg border-light-gray bg-black p-4">
                    <div className="flex items-start gap-3">
                        <div className="flex flex-col gap-2">
                            <h4 className="3xl:text-lg xl:text-base text-sm font-semibold">Set amount to receive receive recurring notifications on</h4>
                            <p className="3xl:text-sm xl:text-xs text-2xs tracking-tight">
                                Every time you spend this much amount, we&apos;ll notify you with detailed stats on what got done with your money. <br />
                                For example - 1000 will notify you every time you&apos;ve spent $1000 on plAn
                            </p>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <Input id="amtToNotif" name="AmtToNotif" type="number" className="!p-3 rounded-md font-medium" placeholder="amount in $" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;
