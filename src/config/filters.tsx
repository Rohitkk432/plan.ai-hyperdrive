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
        name: "In Progress",
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
        name: "Open Source",
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
