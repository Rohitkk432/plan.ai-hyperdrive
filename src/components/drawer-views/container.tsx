import { Fragment, useEffect } from 'react';
import dynamic from 'next/dynamic';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { Dialog } from '@/components/ui/dialog';
import { Transition } from '@/components/ui/transition';
import { DRAWER_VIEW, useDrawer } from '@/components/drawer-views/context';
// dynamic imports
const Sidebar = dynamic(() => import('@/layouts/sidebar/_default'));
const TaskSidebar = dynamic(() => import("@/components/my-tasks/TaskSidebar"));
const CreateView = dynamic(() => import("@/components/views/CreateView"));

function renderDrawerContent(view: DRAWER_VIEW | string) {
    switch (view) {
        case "DASHBOARD_SIDEBAR":
            return <Sidebar />;
        case "TASK_SIDEBAR":
            return <TaskSidebar />;
        case "CREATE_VIEW":
            return <CreateView />;
        default:
            return <Sidebar />;
    }
}

export default function DrawersContainer() {
    const router = useRouter();
    const { view, isOpen, closeDrawer, direction, blur } = useDrawer();
    useEffect(() => {
        // close search modal when route change
        router.events.on("routeChangeStart", closeDrawer);
        return () => {
            router.events.off("routeChangeStart", closeDrawer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={cn("fixed inset-0  z-40 overflow-hidden", `${direction === "center" && "flex justify-center items-center"}`)} onClose={closeDrawer}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Dialog.Overlay
                        className={cn("z-100 fixed inset-0", {
                            "bg-gray-700 bg-opacity-60 backdrop-blur": blur == "glass",
                            "bg-gray-700 bg-opacity-30": blur == "transparent-glass",
                            "bg-gray-700 bg-opacity-0": blur == "transparent",
                        })}
                        onClick={closeDrawer}
                    />
                </Transition.Child>
                {direction !== "center" && (
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-out duration-500"
                        enterFrom={direction === "right" ? "translate-x-full" : "-translate-x-full"}
                        enterTo="translate-x-0"
                        leave="transform transition ease-in duration-500"
                        leaveFrom="translate-x-0"
                        leaveTo={direction === "right" ? "translate-x-full" : "-translate-x-full"}>
                        <div
                            className={cn("fixed inset-y-0  flex w-full max-w-full xs:w-auto", {
                                "right-0": direction === "right",
                                "left-0": direction !== "right",
                            })}>
                            {view && renderDrawerContent(view)}
                        </div>
                    </Transition.Child>
                )}
                {direction === "center" && <div className={cn("flex items-center justify-center")}>{view && renderDrawerContent(view)}</div>}
            </Dialog>
        </Transition>
    );
}
