import { actionTypes } from "./index";

// 查询输入框聚焦action
export const focusInput = () => ({
    type: actionTypes.SEARCH_FOCUS
});

// 查询输入框失去焦点
export const blurInput = () => ({
    type: actionTypes.SEARCH_BLUR
});