import { useState, Fragment } from "react";
import { format } from "date-fns";
import cn from "classnames";
import { BarChart, LineChart, Line, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis } from "recharts";
import Button from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { useBreakpoint } from "@/lib/hooks/use-breakpoint";

import { monthlyComparison } from "./price-history";

function CustomAxisX({ x, y, payload }: any) {
    return (
        <g transform={`translate(${x},${y})`} className="text-sm text-gray-400">
            <text x={0} y={0} dy={25} textAnchor="middle" fill="currentColor">
                {payload.value}
            </text>
        </g>
    );
}

function CustomAxisY({ x, y, payload }: any) {
    return (
        <g transform={`translate(${x},${y})`} className="text-sm text-gray-400">
            <text x={-10} y={5} textAnchor="middle" fill="currentColor">
                ${payload.value}
            </text>
        </g>
    );
}

interface RadioOptionProps {
    value: string;
}

function RadioGroupOption({ value }: RadioOptionProps) {
    return (
        <RadioGroup.Option value={value}>
            {({ checked }) => (
                <span className={`relative flex h-8 cursor-pointer items-center font-semibold justify-center rounded-lg px-3 text-sm tracking-wider ${checked ? "text-primary" : "text-[#A3A3A3]"}`}>
                    {checked && <motion.span className="absolute bottom-0 left-0 right-0 h-full w-full rounded-lg shadow-large" layoutId="statusIndicator" />}
                    <span className="relative">{value}</span>
                </span>
            )}
        </RadioGroup.Option>
    );
}

export default function ComparisonChart() {
    const breakpoint = useBreakpoint();
    const [date, setDate] = useState(1624147200);
    const [status, setStatus] = useState("Daily");
    const [chartData, setChartData] = useState(monthlyComparison);
    const formattedDate = format(new Date(date * 1000), "MMMM d, yyyy hh:mma");

    const handleOnChange = (value: string) => {
        setStatus(value);
        switch (value) {
            case "Daily":
                setChartData(monthlyComparison);
                break;
            case "Cumulative":
                setChartData(monthlyComparison);
                break;
            default:
                setChartData(monthlyComparison);
                break;
        }
    };

    return (
        <div className="rounded-3xl w-full bg-light-dark p-6 shadow-card  border border-[#A3A3A3] ">
            <div className="flex flex-col-reverse justify-between gap-8 md:items-start lg:flex-row lg:items-center lg:gap-4">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="3xl:text-lg xl:text-base text-sm">Daily Usage</div>
                    <div className="3xl:text-3xl xl:text-2xl text-xl font-bold">$ 2.5</div>
                </div>
                <RadioGroup value={status} onChange={handleOnChange} className="flex items-center rounded-full bg-primary-custom-100 p-1 px-5 gap-3">
                    <RadioGroupOption value="Daily" />
                    <RadioGroupOption value="Cumulative" />
                </RadioGroup>
            </div>

            <div className="mt-5 h-[20rem]">
                {status === "Daily" && (
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={400}
                            data={chartData}
                            barSize={30}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}>
                            <YAxis tickLine={false} axisLine={false} tick={<CustomAxisY />} />
                            <XAxis dataKey="name" tick={<CustomAxisX />} />
                            {/* <Tooltip
                            content={<div>{price}</div>}
                            cursor={{
                                strokeWidth: 0,
                                fill: "#1F2937",
                            }}
                        /> */}
                            <CartesianGrid vertical={false} stroke="#A3A3A3" />
                            <Bar dataKey="usage" stackId="a" fill="#FE9A3E" />
                        </BarChart>
                    </ResponsiveContainer>
                )}
                {status === "Cumulative" && (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={chartData}
                            width={500}
                            height={400}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}>
                            <YAxis tickLine={false} axisLine={false} tick={<CustomAxisY />} />
                            <XAxis dataKey="name" tick={<CustomAxisX />} />
                            <CartesianGrid vertical={false} stroke="#A3A3A3" />
                            <Line type="monotone" dataKey="usage" stroke="#FE9A3E" strokeWidth={3} dot={true} />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}
