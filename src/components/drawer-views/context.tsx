import { atom, useAtom } from "jotai";

export type DRAWER_VIEW = "DASHBOARD_SIDEBAR" | "TASK_SIDEBAR" | "CREATE_VIEW";

type DIRECTION = "left" | "right" | "center";
type BLUR = "transparent" | "transparent-glass" | "glass";
type ATOM = {
    isOpen: boolean;
    view: DRAWER_VIEW;
    direction: DIRECTION;
    blur: BLUR;
};
const drawerAtom = atom<ATOM>({
    isOpen: false,
    view: "DASHBOARD_SIDEBAR",
    direction: "left",
    blur: "glass",
});

// const drawerAtom = atom<ATOM>({
//     isOpen: true,
//     view: "TASK_SIDEBAR",
//     direction: "right",
//     blur: "transparent",
// });

// const drawerAtom = atom<ATOM>({
//     isOpen: true,
//     view: "CREATE_VIEW",
//     direction: "center",
//     blur: "glass",
// });

export function useDrawer() {
    const [state, setState] = useAtom(drawerAtom);
    const openDrawer = (view: DRAWER_VIEW, direction: DIRECTION, blur: BLUR = "glass") => {
        setState({ ...state, isOpen: true, view, direction, blur });
    };
    const closeDrawer = () => setState({ ...state, isOpen: false });
    return {
        ...state,
        openDrawer,
        closeDrawer,
    };
}
