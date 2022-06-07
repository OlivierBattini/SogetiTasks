import TasksService from '../../services/TasksService';
import { fetchTasksSuccess, fetchTasksFailure, upsertTaskSuccess, upsertTaskFailure } from './TasksSlice';

const fetchTasks = () => async dispatch => {
    TasksService
        .getAll()
        .then((tasks) => {
            dispatch(fetchTasksSuccess(tasks));
        })
        .catch((error) => {
            dispatch(fetchTasksFailure(error));
        });
};

const switchTask = (task) => async dispatch => {
    let updatedTask = { ...task };
    updatedTask.state = !updatedTask.state;
    dispatch(upsertTask(updatedTask));
};

const upsertTask = (task) => async dispatch => {
    TasksService
        .upsert(task)
        .then((tasks) => {
            dispatch(upsertTaskSuccess(task));
        })
        .catch((error) => {
            dispatch(upsertTaskFailure(error));
        });
};

export { fetchTasks, switchTask, upsertTask };