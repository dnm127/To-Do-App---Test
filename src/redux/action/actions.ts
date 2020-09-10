import { Task } from "../../common/interface"

export const fetchInit = () => {
    return {
        type: 'FETCH'
    }
}

export const add = (task: Task) => {
    return {
        type: 'ADD',
        payload: {
            value: task
        }
    }
}

export const remove = (task: Task) => {
    return {
        type: 'REMOVE',
        payload: {
            value: task
        }
    }
}

export const update = (task: Task) => {
    return {
        type: 'UPDATE',
        payload: {
            value: task
        }
    }
}

export const setSelectedTaskBulkAction = (task: Task) => {
    return {
        type: 'SET_SELETED_TASK',
        payload: {
            value: task
        }
    }
}

export const unsetSelectedTaskBulkAction = (task: Task) => {
    return {
        type: 'UNSET_SELETED_TASK',
        payload: {
            value: task
        }
    }
}