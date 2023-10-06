import routes from '@/config/routes';
import { PlusCircleIcon, FolderIcon, CubeTransparentIcon, WalletIcon } from "@heroicons/react/24/outline";

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
        name: "Open Source",
        icon: <CubeTransparentIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.openSource,
    },
    {
        name: "Billing",
        icon: <WalletIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.billing,
    },
];
