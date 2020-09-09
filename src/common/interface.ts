export interface Task {
    id: number; 
    task: string;
    description: string;
    priority: string;
    dueDate: string;
}

export interface reduxAction {
    type: string;
    payload: {
        value: any
    }
}

export interface Priority {
    value: string;
}