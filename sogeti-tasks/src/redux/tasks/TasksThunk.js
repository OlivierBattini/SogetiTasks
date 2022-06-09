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

const upsertTask = (task, next) => async dispatch => {
    TasksService
        .upsert(task)
        .then((tasks) => {
            dispatch(upsertTaskSuccess(task));
            if (next) { next(); }
        })
        .catch((error) => {
            dispatch(upsertTaskFailure(error));
        });
};

export { fetchTasks, switchTask, upsertTask };