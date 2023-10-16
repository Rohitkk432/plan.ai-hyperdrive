import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

export interface step1Props {
    repoName: string;
    repoLink: string;
    repoId: string;
    selectedRepo: any;
    issueTitle: string;
    selectedIssue: any;
    additionalComments: string;
}
export interface step2Props {
    anonymizedDescription: string;
    deadline: string;
    funds: number;
    openSourceBlockers: any;
    blockerCost: number;
}

export interface creationState {
    step1: step1Props;
    step2: step2Props;
}

const initialState: creationState = {
    step1: {
        repoName: "",
        repoLink: "",
        repoId: "",
        selectedRepo: undefined,
        issueTitle: "",
        selectedIssue: undefined,
        additionalComments: "",
    },
    step2: {
        anonymizedDescription: "",
        deadline: "",
        funds: 0,
        openSourceBlockers: undefined,
        blockerCost: 0,
    },
};

export const taskCreation = createSlice({
    name: "taskCreation",
    initialState,
    reducers: {
        setStep1Data: (state, action: PayloadAction<step1Props>) => {
            state.step1 = action.payload;
        },
        setStep2Data: (state, action: PayloadAction<step2Props>) => {
            state.step2 = action.payload;
        },
        reset: (state) => {
            state.step1 = {
                repoName: "",
                repoLink: "",
                repoId: "",
                selectedRepo: undefined,
                issueTitle: "",
                selectedIssue: undefined,
                additionalComments: "",
            };
            state.step2 = {
                anonymizedDescription: "",
                deadline: "",
                funds: 0,
                openSourceBlockers: undefined,
                blockerCost: 0,
            };
        },
    },
});

export default taskCreation.reducer;
export const selectCreation = (state: AppState) => state.taskCreation;
export const { setStep1Data, setStep2Data, reset } = taskCreation.actions;
