import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/tasks/TasksThunk';

import TaskList from '../components/tasks/TaskList';

export default function MainView() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [ ]);

    const tasks = [...useSelector(state => state.tasks.tasks)].sort((t1, t2) => {
        if (!t1.status && t2.status) {
            return -1;
        } else if (t1.status && !t2.status) {
            return 1;
        }
        return 0;
    });

    return (
        <>
            <h1>♠ Sogeti tasks ♠</h1>
            <TaskList tasks={tasks} />
        </>
    );
}
