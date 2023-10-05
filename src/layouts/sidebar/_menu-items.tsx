import routes from '@/config/routes';
import {
  LightBulbIcon,
  FolderIcon,
  ArrowPathRoundedSquareIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

export const menuItems: any = [
    {
        name: "learn",
        icon: <LightBulbIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.learn,
    },
    {
        name: "projects",
        icon: <FolderIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.projects,
    },
    {
        name: "issues",
        icon: <MapIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.issues,
    },
    {
        name: "swap",
        icon: <ArrowPathRoundedSquareIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
        href: routes.swap,
    },
    // {
    //   name: 'roadmaps',
    //   icon: <MapIcon className="h-5 w-5 xl:h-6 xl:w-6 3xl:h-7 3xl:w-7" />,
    //   href: routes.roadmaps,
    // },
];
