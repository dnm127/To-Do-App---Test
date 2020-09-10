import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove, fetchInit } from '../redux/action/actions';
import Todo from './Todo/Todo';
import { TodoListContainer, Title, TaskInput, BulkContainer, RemoveBtn, DoneBtn } from '../common/style';
import { Task } from '../common/interface';

export default function TodoList() {
    const todos = useSelector((state:any) => state.todoReducer);
    const selectedTasks = useSelector((state: any) => state.selectedTaskReducer);
    const dispatch = useDispatch();
    const [searchResult, setSearchResult] = useState(new Array<Task>());

    useEffect(() => {
        dispatch(fetchInit());
    }, [dispatch])

    const deleteSelectedTasks = (data: Task[]) => {
        data.map((task: Task) => {
            return dispatch(remove(task));
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
