export const generateId = () => {
    return new Date().getTime();
}

export const saveToLocalStorage = (data: any) => {
    let todos = localStorage.getItem('todos');
    if (todos){
        localStorage.removeItem('todos');
        localStorage.setItem('todos', JSON.stringify(data));
    }
}

export const getDataFromLocalStorage = () => {
    let todos = localStorage.getItem('todos');
    if (todos){
        return JSON.parse(todos);
    }
}