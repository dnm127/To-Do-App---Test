import React, { useEffect, useState } from 'react'
import NewTask from '../NewTask';
import { useSelector, useDispatch } from 'react-redux';
import { remove, setSelectedTaskBulkAction, unsetSelectedTaskBulkAction } from '../../redux/action/actions';
import { DetailBtn, RemoveBtn, TodoContainer, Checkbox, TaskName, TaskNameContainer } from '../../common/style';
import { Task } from '../../common/interface';

export default function Todo(props: any) {
    const todo : Task = props.detail;
    const [selectedTask, setSelectedTask] = useState({});
    const [checked, setCheck] = useState(false);
    const dispatch = useDispatch();

    const deleteTask = (data: Task) => {
        dispatch(remove(data));
    }

    const detail = (data: Task) => {
        if (!(selectedTask as Task).id){
            setSelectedTask(data);
        }
        else {
            setSelectedTask({});    
        }
    }

    const selectCurrentTask = (checked: boolean, task: Task) => {
        setCheck(!checked)
        if (!checked){ 
            dispatch(setSelectedTaskBulkAction(task))
        }
        else {
            dispatch(unsetSelectedTaskBulkAction(task))
        }
    }

    return (
        <div>
        <TodoContainer key={todo.id}>
            <div>
                <TaskNameContainer>
                    <Checkbox type="checkbox" name="task" onClick={() => selectCurrentTask(checked, todo)}/>
                    <TaskName>{todo.task}</TaskName>
                </TaskNameContainer>
                <div>
                    <DetailBtn onClick={() => detail(todo)}>Detail</DetailBtn>
                    <RemoveBtn onClick={() => deleteTask(todo)}>Remove</RemoveBtn>
                </div>
            </div>
        </TodoContainer>
        {
            (selectedTask as any).id && 
            <div style={{border: '1px solid black'}}>
                <NewTask task={selectedTask}/>
            </div>
        }
        </div>
    )
}
