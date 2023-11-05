import { selectState } from "@/components/ui/dropdowns/custom-select";

import { CubeTransparentIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";

import { BacklogIcon, CancelledIcon, DoneIcon, InProgressIcon, TodoIcon } from "@/components/icons/state-group";

import { SignalCellularAlt, ErrorOutline, SignalCellularAlt1Bar, SignalCellularAlt2Bar, DoNotDisturb } from "@mui/icons-material";

export const States: selectState[] = [
    {
        name: "Backlog",
        icon: <BacklogIcon />,
    },
    {
        name: "Todo",
        icon: <TodoIcon />,
    },
    {
        name: "InProgress",
        icon: <InProgressIcon />,
    },
    {
        name: "Done",
        icon: <DoneIcon />,
    },
    {
        name: "Cancelled",
        icon: <CancelledIcon />,
    },
];

export const Priorities: selectState[] = [
    {
        name: "Urgent",
        icon: <ErrorOutline className="!w-5 !h-5" />,
    },
    {
        name: "High",
        icon: <SignalCellularAlt className="!w-5 !h-5" />,
    },
    {
        name: "Medium",
        icon: <SignalCellularAlt2Bar className="!w-5 !h-5" />,
    },
    {
        name: "Low",
        icon: <SignalCellularAlt1Bar className="!w-5 !h-5" />,
    },
    {
        name: "None",
        icon: <DoNotDisturb className="!w-5 !h-5" />,
    },
];

export const IssueStates: selectState[] = [
    {
        name: "OpenSource",
        icon: <CubeTransparentIcon className="!w-5 !h-5" />,
    },
    {
        name: "Proprietary",
        icon: <DocumentCheckIcon className="!w-5 !h-5" />,
    },
];

export const DueDate: selectState[] = [
    {
        name: "Last week",
    },
    {
        name: "2 weeks from now",
    },
    {
        name: "1 month from now",
    },
    {
        name: "2 months from now",
    },
];

export type statesType = "Backlog" | "Todo" | "InProgress" | "Done" | "Cancelled";

export type priorityType = "Urgent" | "High" | "Medium" | "Low" | "None";

export type issueStatesType = "OpenSource" | "Proprietary";

export type dueDateType = "Last Week" | "2 weeks from now" | "1 month from now" | "2 months from now";

export const filterStateIcons = {
    Backlog: {
        icon: <BacklogIcon className="w-3 h-3" />,
    },
    Todo: {
        icon: <TodoIcon className="w-3 h-3" />,
    },
    InProgress: {
        icon: <InProgressIcon className="w-3 h-3" />,
    },
    Done: {
        icon: <DoneIcon className="w-3 h-3" />,
    },
    Cancelled: {
        icon: <CancelledIcon className="w-3 h-3" />,
    },
};

export const filterPriorityIcons = {
    Urgent: {
        icon: <ErrorOutline fontSize="inherit" className="!text-[#cd3d3d]" />,
    },
    High: {
        icon: <SignalCellularAlt fontSize="inherit" className="!text-[#CA4416]" />,
    },
    Medium: {
        icon: <SignalCellularAlt2Bar fontSize="inherit" className="!text-[#DA9D0B]" />,
    },
    Low: {
        icon: <SignalCellularAlt1Bar fontSize="inherit" className="!text-[#21B144]" />,
    },
    None: {
        icon: <DoNotDisturb fontSize="inherit" className="!text-gray-400" />,
    },
};

export const filterIssueStatesIcons = {
    OpenSource: {
        icon: <CubeTransparentIcon fontSize="inherit" className="!text-[#26b5ce] w-3 h-3" />,
    },
    Proprietary: {
        icon: <DocumentCheckIcon fontSize="inherit" className="!text-[#DA9D0B] w-3 h-3" />,
    },
};