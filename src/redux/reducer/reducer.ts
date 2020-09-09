import { combineReducers } from "redux";
import { saveToLocalStorage } from "../../common/function";
import { reduxAction, Task } from "../../common/interface";

export const todoReducer = (state: Task[] = [], action: reduxAction) => {
    switch (action.type) {
        case 'ADD':
            state = state.concat(action.payload.value);
            // saveToLocalStorage(state);
            return [...state];
        case 'REMOVE':
            state = state.filter((item:any) => item.id != action.payload.value.id);
            // saveToLocalStorage(state);
            return [...state];
        case 'UPDATE':
            const newData = action.payload.value;
            console.log(newData);
            state = state.filter((item:any) => item.id != newData.id);                
            state = state.concat(newData);
            return [...state];
        default:
            return state;
    }
}

export const selectedTaskReducer = (state: Task[] = [], action: reduxAction) => {
    switch (action.type) {
        case 'SET_SELETED_TASK':
            state = state.concat(action.payload.value);
            return state;
        case 'UNSET_SELETED_TASK':
            state = state.filter((item: any) => item.id !== action.payload.value.id);
            return state;
        default:
            return state;
    }
}


export default combineReducers({ todoReducer, selectedTaskReducer });