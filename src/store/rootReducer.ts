import { AnyAction, CombinedState, combineReducers, Reducer } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfoSlice";
import callLoaderReducer from "./callLoaderSlice";

const appReducer = combineReducers({
    userInfo: userInfoReducer,
    callLoader: callLoaderReducer,
});

export type AppState = CombinedState<{
    userInfo: ReturnType<typeof userInfoReducer>;
    callLoader: ReturnType<typeof callLoaderReducer>;
}>;

const rootReducer: Reducer = (state: AppState, action: AnyAction) => {
    return appReducer(state, action);
};

export default rootReducer;
