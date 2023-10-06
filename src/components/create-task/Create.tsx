import React, { useState, useEffect } from "react";

import Step1 from "@/components/create-task/Step1";
// import Step2 from "@/components/create-task/Step2";
// import Step3 from "@/components/create-task/Step3";
// import Step4 from "@/components/create-task/Step4";
// import Step5 from "@/components/create-task/Step5";

interface CreateProps {}

export const Create: React.FC<CreateProps> = ({}) => {
    const [step, setStep] = useState(1);

    return (
        <div className="flex flex-col items-center gap-6 xl:gap-8 3xl:gap-10">
            {step === 1 && (
                <div className="z-[40] flex items-center rounded-full bg-black py-2 px-8 text-base font-bold xl:text-lg 3xl:text-xl">
                    <div className="text-primary">step 1.</div>
                    <div>task details</div>
                </div>
            )}
            {step === 2 && (
                <div className="z-[40] flex items-center rounded-full bg-black py-2 px-8 text-base font-bold xl:text-lg 3xl:text-xl">
                    <div className="text-primary">step 2.</div>
                    <div>funding & anonymization</div>
                </div>
            )}
            {step === 3 && (
                <div className="z-[40] flex items-center rounded-full bg-black py-2 px-8 text-base font-bold xl:text-lg 3xl:text-xl">
                    <div className="text-primary">step 3.</div>
                    <div>developer selection</div>
                </div>
            )}
            {step === 4 && (
                <div className="z-[40] flex items-center rounded-full bg-black py-2 px-8 text-base font-bold xl:text-lg 3xl:text-xl">
                    <div className="text-primary">preview</div>
                </div>
            )}
            {step === 5 && (
                <div className="z-[40] flex items-center rounded-full bg-black py-2 px-8 text-base font-bold xl:text-lg 3xl:text-xl">
                    <div className="text-primary">creating task</div>
                </div>
            )}
            {step === 6 && (
                <div className="z-[40] flex items-center rounded-full bg-black py-2 px-8 text-base font-bold xl:text-lg 3xl:text-xl">
                    <div className="text-new-green">task created!</div>
                </div>
            )}
            <div className="relative flex h-[38rem] w-[34rem] items-center justify-center xl:h-[44rem] xl:w-[40rem]  2xl:h-[46rem] 2xl:w-[42rem]">
                <div className="absolute z-[20] h-full w-full">
                    <div className="absolute -left-[2.5%] bottom-0 h-[60%] w-[102.5%] rounded-full border-2 bg-[#F5E468] blur-[100px]" />
                    <div className="absolute left-[20%] bottom-[12%] h-[50%] w-full -rotate-[48.87deg] rounded-full border-2 bg-[#6BAE63] blur-[50px]" />
                    <div className="absolute -left-[2.5%] -top-[1%] h-[75%] w-[105%] rounded-full border-2 bg-[#FE9A3E] blur-[100px]" />
                </div>
                {step === 1 && <Step1 setStep={setStep} />}
                {/* {step === 2 && <Step2 setStep={setStep} />}
                {step === 3 && <Step3 setStep={setStep} />}
                {step === 4 && <Step4 setStep={setStep} />}
                {step === 5 && <Step5 setStep={setStep} />} */}
            </div>
        </div>
    );
};

export default Create;
