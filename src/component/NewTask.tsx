import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { priority as priorityArr} from '../common/constant';
import { useDispatch } from 'react-redux';
import { add, update } from '../redux/action/actions';
import { generateId } from '../common/function';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { NewTaskContainer,Title, TaskInput, Label, TextArea, SubContainer, DateInput, AddBtn, SelectPriority } from '../common/style';
import { Priority } from '../common/interface';

export default function NewTask(props: any) {
    const { register, handleSubmit, errors, reset } = useForm();
    const dispatch = useDispatch();
    const task = props.task;

    const onSubmit = (data: any) => {
        if (!task){
            let id = generateId();
            data.id = id;
            data.dueDate = selectedDate;
            dispatch(add(data));
        }
        else {
            data.dueDate = selectedDate;
            dispatch(update(data))
        }
        reset();
    }

    const getToday = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }

    const [selectedDate, setSelectedDate] = useState(task ? task.dueDate : getToday());

    const handleDateChange = (date:any) => {
        setSelectedDate(date);
    };

    return (
        <NewTaskContainer>
        {
            task ?
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="id" value={task.id} type="hidden" ref={register({ required: true })}/>
                <TaskInput name="task" defaultValue={task.task} type="text" ref={register} placeholder="Add new task ..."/>
                {errors.task && <div>Task name is required</div>}

                <Label>Description</Label>
                <TextArea name="description" ref={register} defaultValue={task.description}></TextArea>

                <SubContainer>
                    <div>
                        <Label>Due date</Label>
                        {/* <input name="dueDate" defaultValue={task.dueDate} type="date" ref={register}/> */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <DateInput
                                disableToolbar
                                variant="inline"
                                name="dueDate"
                                format="dd MMMM yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div>
                        <Label>Priority</Label>
                        <SelectPriority name="priority" defaultValue={task.priority} ref={register}>
                            {
                                priorityArr.map((priority: Priority, index: number) => {
                                    return <option ref={register} key={priority.value+index} value={priority.value.toLowerCase()}>{priority.value}</option>
                                })
                            }
                        </SelectPriority>
                    </div>
                </SubContainer>
                <AddBtn type="submit">Update</AddBtn>
            </form>
            : 
            <>
                <Title>New task</Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TaskInput name="task" type="text" ref={register({ required: true })} placeholder="Add new task ..."/>
                    {errors.task && <div>Task name is required</div>}

                    <Label>Description</Label>
                    <TextArea name="description" ref={register}></TextArea>

                    <SubContainer>
                        <div>
                            <Label>Due date</Label>
                            {/* <input name="dueDate" type="date" ref={register} defaultValue={selectedDate}/> */}
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <DateInput
                                    disableToolbar
                                    variant="inline"
                                    disablePast={true}
                                    name="dueDate"
                                    format="dd MMMM yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div>
                            <Label>Priority</Label>
                            <SelectPriority name="priority" ref={register} defaultValue="normal">
                                {
                                    priorityArr.map((priority: Priority, index: number) => {
                                        return <option ref={register} key={priority.value+index} value={priority.value.toLowerCase()}>{priority.value}</option>
                                    })
                                }
                            </SelectPriority>
                        </div>
                    </SubContainer>
                    <AddBtn type="submit">Add</AddBtn>
                </form>
            </>
        }
        </NewTaskContainer>
    )
}
