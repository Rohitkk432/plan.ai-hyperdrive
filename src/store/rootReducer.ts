import { AnyAction, CombinedState, combineReducers, Reducer } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfoSlice";
import callLoaderReducer from "./callLoaderSlice";
import taskCreationReducer from "./taskCreationSlice";
import userMappingReducer from "./userMappingSlice";

const appReducer = combineReducers({
    userInfo: userInfoReducer,
    callLoader: callLoaderReducer,
    taskCreation: taskCreationReducer,
    userMapping: userMappingReducer,
});

export type AppState = CombinedState<{
    userInfo: ReturnType<typeof userInfoReducer>;
    callLoader: ReturnType<typeof callLoaderReducer>;
    taskCreation: ReturnType<typeof taskCreationReducer>;
    userMapping: ReturnType<typeof userMappingReducer>;
}>;

const rootReducer: Reducer = (state: AppState, action: AnyAction) => {
    return appReducer(state, action);
};

export default rootReducer;
