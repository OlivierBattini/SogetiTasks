import TasksService from '../../services/TasksService';
import { fetchTasksSuccess, fetchTasksFailure } from './TasksSlice';

const fetchTasks = () => async dispatch => {
    TasksService
        .get()
        .then((tasks) => {
            dispatch(fetchTasksSuccess(tasks));
        })
        .catch((error) => {
            dispatch(fetchTasksFailure(error));
        });
};

export { fetchTasks };