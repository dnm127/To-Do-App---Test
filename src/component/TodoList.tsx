import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/action/actions';
import { getDataFromLocalStorage } from '../common/function';
import NewTask from './NewTask';
import Todo from './Todo/Todo';
import { TodoListContainer, Title, TaskInput, BulkContainer, RemoveBtn, DoneBtn } from '../common/style';
import { Task } from '../common/interface';

export default function TodoList() {
    const todos = useSelector((state:any) => state.todoReducer);
    // const todos = [
    //     {task: "a", description: "1", priority: "low", id: 1599661553059, dueDate: "09/09/2020"},
    //     {task: "b", description: "2", priority: "low", id: 1599661556273, dueDate: "09/09/2020"},
    //     {task: "c", description: "3", priority: "low", id: 1599661553054, dueDate: "09/09/2020"},
    //     {task: "d", description: "4", priority: "low", id: 1599661556279, dueDate: "09/09/2020"},
    //     {task: "ad", description: "", priority: "low", id: 1599661553051, dueDate: "09/09/2020"},
    //     {task: "bc", description: "", priority: "low", id: 1599661556270, dueDate: "09/09/2020"},
    //     {task: "ad", description: "", priority: "low", id: 1599661553051, dueDate: "09/09/2020"},
    //     {task: "td", description: "", priority: "low", id: 1599661553099, dueDate: "09/09/2020"},
    //     {task: "kn", description: "", priority: "low", id: 1599661553076, dueDate: "09/09/2020"},
    //     {task: "er", description: "", priority: "low", id: 1599661553033, dueDate: "09/09/2020"},
    // ]
    const selectedTasks = useSelector((state: any) => state.selectedTaskReducer);
    const dispatch = useDispatch();
    const [searchResult, setSearchResult] = useState(new Array<Task>());

    const deleteSelectedTasks = (data: Task[]) => {
        data.map((task: Task) => {
            dispatch(remove(task));
        })
        selectedTasks.length = 0;
    }

    const searchForTask = (event: any) => {
        let keyword = event.target.value;
        let result = todos.filter((item: Task) => item.task.includes(keyword));
        setSearchResult(result);
    }

    return (
        <TodoListContainer>
            <div style={{padding: '20px 30px 20px 30px'}}>
                <Title>To Do List</Title>
                <TaskInput type="text" onChange={searchForTask} placeholder="Search ..."/>
                {
                    searchResult.length === 0 ?
                    todos
                    .sort((a: Task, b: Task) => {
                        let date1:any = new Date(a.dueDate);
                        let date2:any = new Date(b.dueDate);
                        return date1 - date2;
                    })
                    .map((todo: Task, index: number) => {
                        return (
                            <Todo key={todo.id} detail={todo}/>
                        )
                    })
                    :
                    searchResult
                    .sort((a: Task, b: Task) => {
                        let date1:any = new Date(a.dueDate);
                        let date2:any = new Date(b.dueDate);
                        return date1 - date2;
                    })
                    .map((todo: Task, index: number) => {
                        return (
                            <Todo key={todo.id} detail={todo}/>
                        )
                    })
                } 
                </div>
            {
                selectedTasks.length > 0 &&
                <BulkContainer>
                    <div>Bulk action</div>
                    <div>
                        <DoneBtn>Done</DoneBtn>
                        <RemoveBtn onClick={() => deleteSelectedTasks(selectedTasks)}>Remove</RemoveBtn>
                    </div>
                </BulkContainer>
            }
        </TodoListContainer>
    )
}
