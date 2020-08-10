import {SEARCH_BLUR, SEARCH_FOCUS} from "./actionTypes";

const defaultState = {
    inputfocus: false
};

// 接收action，进行store数据处理
export default (state = defaultState, action ) => {
    if(action.type === SEARCH_FOCUS){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputfocus = true;
        return newState;
    }else if(action.type === SEARCH_BLUR){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputfocus = false;
        return newState;
    }

    return state;
}
