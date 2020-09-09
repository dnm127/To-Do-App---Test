import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';

export const Container = styled.div`
    display: flex;
    height: 100%;
`;

export const NewTaskContainer = styled.div`
    /* width: 100%; */
    height: 100%;
    padding: 20px 30px 20px 30px;
    /* border-right: 1px solid black; */

    & form {
        width: 100%;
    }
`;

export const TodoListContainer = styled.div`
    /* width: 100%; */
    /* padding: 20px 30px 20px 30px; */
    height: 100%;
    border-left: 1px solid black;

    & form {
        width: 100%;
    }
`;

export const Title = styled.div`
    font-size: 18px;
    color: #000000;
    font-family: 'Source Sans Pro';
    text-align: center;
    font-weight: bold;
    margin-bottom: 50px;
`;

export const TaskInput = styled.input`
    /* height: 32px; */
    width: -webkit-fill-available;
    color: #000000;
    font-family: 'Source Sans Pro';
    font-size: 12px;
    text-align: left;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
`;

export const Label = styled.label`
    color: #000000;
    font-family: 'Source Sans Pro';
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    display: block;
    margin: 20px 0 10px 0;
`;

export const TextArea = styled.textarea`
    width: -webkit-fill-available;
    height: 125px;
    color: #000000;
    font-family: 'Source Sans Pro';
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
    text-align: left;
    padding: 5px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 0px;
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;

    & >div {
        width: 47%;
    }

    & label {
        width: 100%;
    }
`;

export const DateInput = styled(KeyboardDatePicker)`
    margin-top: 0 !important;
    width: 100%;
    border: 1px solid black !important;

    /* & .MuiFormControl-root {
        border: 1px solid black;
    } */

    & .MuiInput-underline {
        &::before {
            content: unset;
        } 

        &::after {
            border: none;
        }
    }

    & input {
        color: #000000;
        font-family: 'Source Sans Pro';
        font-size: 12px;
        text-align: left;
        padding: 10px;
        background: #ffffff;
        border-right: 1px solid #000000;
        border-radius: 0px;
    }
`;

export const AddBtn = styled.button`
    color: #FFFFFF;
    font-family: Arimo;
    font-size: 15px;
    width: 100%;
    height: 32px;
    text-align: center;
    background: #5CB85C;
    border: none;
    border-radius: 10px;
    margin-top: 40px;
`;

export const SelectPriority = styled.select`
    margin-top: 0;
    height: 36px;
    width: 100%;
`;

export const DetailBtn = styled.button`
    color: #FFFFFF;
    font-family: Arimo;
    font-size: 12px;
    text-align: center;
    background: #00BCD4;
    border: none;
    border-radius: 10px;
    padding: 7px 30px;
    margin-right: 15px;
`;

export const RemoveBtn = styled(DetailBtn)`
    background: #D9534F;
    margin-right: 0;
`;

export const TodoContainer = styled.div`
    height: 61px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 0px;
    display: flex;
    align-items: center;
    padding: 5px 15px; 
    margin-top: 20px;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const TaskNameContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    margin-right: 10px;
`;

export const TaskName = styled.span`
    color: #333333;
    font-family: 'Source Sans Pro';
    font-size: 16px;
    text-align: left;
    line-height: 1px;
`;

export const BulkContainer = styled.div`
    position: sticky;
    bottom: 0;
    background: #E0E0E0;
    border: 1px solid #000000;
    padding: 20px 25px; 
    display: flex;
    justify-content: space-between;
`;

export const DoneBtn = styled(RemoveBtn)`
    background: #2196F3;
    margin-right: 20px;
`; 

