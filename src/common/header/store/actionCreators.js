import { actionTypes } from "./index";


export const focusInput = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const blurInput = () => ({
    type: actionTypes.SEARCH_BLUR
});