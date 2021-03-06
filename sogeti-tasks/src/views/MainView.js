import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, switchTask } from '../redux/tasks/TasksThunk';
import { Link } from 'react-router-dom';

import Config from '../config/Config';

import TaskCard from '../components/tasks/TaskCard';
import FormGroup from '../components/controls/FormGroup';
import SecondaryButton from '../components/controls/SecondaryButton';

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
            <h2>Task list</h2>
            
            <FormGroup>
                <Link to={ Config.Routes.Task.replace(':id', 'new') }>
                    <SecondaryButton>New Task</SecondaryButton>
                </Link>
            </FormGroup>

            <div className="tasklist">
                {
                    tasks.map(task => {
                        return <TaskCard
                            key={ task.id }
                            id={ task.id }
                            state={ task.state }
                            title={ task.title }
                            onStatusSwitch={ (event) => dispatch(switchTask(task)) }
                            editLink={ Config.Routes.Task.replace(':id', task.id) }
                        />;
                    })
                }
            </div>
        </>
    );
}
