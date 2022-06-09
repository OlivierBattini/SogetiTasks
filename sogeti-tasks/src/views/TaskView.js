import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { upsertTask } from '../redux/tasks/TasksThunk';
import Config from '../config/Config';

import TaskForm from '../components/tasks/TaskForm';

import NotFoundView from './NotFoundView';

export default function TaskView() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { id } = useParams();
    const isNewTask = id === 'new';
    
    const tasks = [...useSelector(state => state.tasks.tasks)];
    const currentTask = tasks.find(t => t.id == id) || { }; // === does not work on proxies

    const submitForm = (task) => {
        dispatch(upsertTask(task, () => navigate(Config.Routes.Home)));
    };

    if (!isNewTask && !currentTask) {
        return <NotFoundView />;
    } else {
        return (
            <>
                <h2>{ isNewTask ? 'New task' : 'Task details' }</h2>
                <TaskForm isNewTask={ isNewTask } task={ currentTask } submitForm={ submitForm } />
            </>
        );
    }
};