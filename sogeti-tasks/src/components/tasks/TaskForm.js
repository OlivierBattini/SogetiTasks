import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Hidden from '../controls/Hidden';
import Checkbox from '../controls/Checkbox';
import InputText from '../controls/InputText';
import InputMultiline from '../controls/InputMultiline';
import PrimaryButton from '../controls/PrimaryButton';
import SecondaryButton from '../controls/SecondaryButton';
import FormGroup from '../controls/FormGroup';
import ButtonBar from '../controls/ButtonBar';
import Config from '../../config/Config';
import AlertDanger from '../controls/AlertDanger';

import TaskFormConfig from './TaskFormConfig.json';

export default function TaskForm({ isNewTask, task, submitForm }) {

    const taskId = task.id || 0;
    const taskState = task.state || false;
    const taskTitle = task.title || '';
    const taskDescription = task.description || '';

    const refId = useRef(taskId);
    const refState = useRef(taskState);
    const refTitle = useRef(taskTitle);
    const refDescription = useRef(taskDescription);

    const [ errorMessage, setErrorMessage ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (TaskFormConfig.TITLE_IS_REQUIRED && refTitle.current.value.length < TaskFormConfig.TITLE_MIN_LENGTH) {
            setErrorMessage(TaskFormConfig.TITLE_ERROR);
        } else {
            let newTask = {
                id: refId.current.value,
                state: refState.current.checked,
                title: refTitle.current.value,
                description: refDescription.current.value
            };
            submitForm(newTask);
        }
    };
    
    return (
        <form onSubmit={ handleSubmit }>

            <Hidden
                id="id"
                ref={ refId }
                defaultValue={ taskId }
            />

            <FormGroup>
                <Checkbox
                    id="state"
                    ref={ refState }
                    defaultChecked={ taskState }
                    label="⠀Completed task"
                    disabled={ !isNewTask }
                />
            </FormGroup>

            <FormGroup>
                <InputText
                    id="title"
                    ref={ refTitle }
                    defaultValue={ taskTitle }
                    label="Title"
                    disabled={ !isNewTask }
                />
            </FormGroup>

            <FormGroup>
                <InputMultiline
                    id="description"
                    ref={ refDescription }
                    defaultValue={ taskDescription }
                    label="Description"
                    disabled={ !isNewTask }
                ></InputMultiline>
            </FormGroup>

            <ButtonBar>
                <Link to={ Config.Routes.Home }>
                    <SecondaryButton>Back</SecondaryButton>
                </Link>

                { isNewTask && <PrimaryButton submit>Save</PrimaryButton> }
            </ButtonBar>

            { errorMessage !== '' && <FormGroup><AlertDanger>{ errorMessage }</AlertDanger></FormGroup> }

        </form>
    );
};