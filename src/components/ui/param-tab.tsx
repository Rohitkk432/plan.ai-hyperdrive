import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Tab, TabItem, TabPanels, TabPanel } from "@/components/ui/tab";
import { useBreakpoint } from "@/lib/hooks/use-breakpoint";
import { useIsMounted } from "@/lib/hooks/use-is-mounted";
import { useClickAway } from "@/lib/hooks/use-click-away";

interface TabMenuItem {
    title: React.ReactNode;
    path: string;
    comingSoon?: boolean;
}

interface ParamTabTypes {
    tabMenu: TabMenuItem[];
    children: React.ReactChild[];
}

export { TabPanel };

export default function ParamTab({ tabMenu, children }: ParamTabTypes) {
    const router = useRouter();
    const isMounted = useIsMounted();
    const breakpoint = useBreakpoint();
    const dropdownEl = useRef<HTMLDivElement>(null);
    let [selectedTabIndex, setSelectedTabIndex] = useState(0);
    let [visibleMobileMenu, setVisibleMobileMenu] = useState(false);

    const {
        query: { ...restQuery },
    } = router;
    function handleTabChange(index: number) {
        if (tabMenu[index].comingSoon) return;
        router.push(
            {
                pathname: router.pathname,
                query: { ...restQuery, view: tabMenu[index].path },
            },
            undefined,
            { scroll: false }
        );
    }
    useEffect(() => {
        if (router?.query?.view) {
            setSelectedTabIndex(tabMenu.findIndex((item) => router.query.view === item.path));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query]);

    useClickAway(dropdownEl, () => {
        setVisibleMobileMenu(false);
    });
    return (
        <Tab.Group selectedIndex={selectedTabIndex} onChange={(index) => handleTabChange(index)}>
            <Tab.List className="relative mb-6 bg-black bg-black text-2xs uppercase before:absolute before:left-0 before:bottom-0 before:w-full before:rounded-sm before:bg-gray-800 sm:gap-8 sm:rounded-none md:before:h-0.5 xl:text-xs 3xl:text-sm">
                {isMounted && ["xs", "sm"].indexOf(breakpoint) !== -1 ? (
                    <div ref={dropdownEl} className="rounded-xl border-2 border-gray-700">
                        <button onClick={() => setVisibleMobileMenu(!visibleMobileMenu)} className="flex w-full items-center justify-between py-2.5 px-4 uppercase text-gray-300 sm:px-5 sm:py-3.5">
                            <span className="font-medium text-gray-100">{tabMenu[selectedTabIndex].title}</span>
                            <ChevronDownIcon className="h-auto w-3.5" />
                        </button>
                        <div
                            className={cn(
                                "absolute top-full left-0 z-10 mt-1 grid w-full gap-0.5 rounded-xl border border-gray-700 bg-gray-800 p-2 text-left shadow-large xs:gap-1",
                                visibleMobileMenu ? "visible opacity-100" : "invisible opacity-0"
                            )}>
                            {tabMenu.map((item) => (
                                <div key={item.path} onClick={() => setVisibleMobileMenu(false)} className="w-full">
                                    <TabItem className="w-full">{item.title}</TabItem>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-6 md:gap-8 xl:gap-10 4xl:gap-12">
                        {tabMenu.map((item) => (
                            <TabItem key={item.path}>
                                <div className="flex flex-row items-center justify-center">
                                    <div>{item.title}</div>
                                    {item.comingSoon && item.path !== router.query.view && (
                                        <span className="relative z-[2] mx-2 rounded-full bg-gray-800 px-2 py-0.5 normal-case text-red-700">Coming Soon</span>
                                    )}
                                </div>
                            </TabItem>
                        ))}
                    </div>
                )}
            </Tab.List>
            <TabPanels>{children}</TabPanels>
        </Tab.Group>
    );
}
