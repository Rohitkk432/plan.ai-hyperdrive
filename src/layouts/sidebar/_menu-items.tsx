import routes from '@/config/routes';
import { PlusCircleIcon, FolderIcon, DocumentMagnifyingGlassIcon, WalletIcon } from "@heroicons/react/24/outline";

export const menuItems: any = [
    {
        name: "Create Tasks",
        icon: <PlusCircleIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.createTasks,
    },
    {
        name: "My Tasks",
        icon: <FolderIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.myTasks,
    },
    {
        name: "Views",
        icon: <DocumentMagnifyingGlassIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.views,
    },
    {
        name: "Billing",
        icon: <WalletIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.billing,
    },
];
