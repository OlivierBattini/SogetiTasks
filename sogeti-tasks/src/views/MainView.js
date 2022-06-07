import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, switchTask } from '../redux/tasks/TasksThunk';

import TaskCard from '../components/tasks/TaskCard';

export default function MainView() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [ ]);

    const tasks = [...useSelector(state => state.tasks.tasks)].sort((t1, t2) => {
        if (!t1.state && t2.state) {
            return -1;
        } else if (t1.state && !t2.state) {
            return 1;
        }
        return 0;
    });

    return (
        <>
            <h1>♠ Sogeti tasks ♠</h1>
            <div className="tasklist">
                {
                    tasks.map(task => {
                        return <TaskCard key={ task.id } id={ task.id } state={ task.state } title={ task.title } onStatusSwitch={ (event) => dispatch(switchTask(task)) } />;
                    })
                }
            </div>
        </>
    );
}
