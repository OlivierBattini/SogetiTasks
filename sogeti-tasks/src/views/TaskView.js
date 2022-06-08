import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { upsertTask } from '../redux/tasks/TasksThunk';
import { Link } from 'react-router-dom';

import NotFoundView from './NotFoundView';

import Hidden from '../components/controls/Hidden';
import Checkbox from '../components/controls/Checkbox';
import InputText from '../components/controls/InputText';
import InputMultiline from '../components/controls/InputMultiline';
import SecondaryButton from '../components/controls/SecondaryButton';
import FormGroup from '../components/controls/FormGroup';
import Config from '../config/Config';

export default function TaskView() {

    const dispatch = useDispatch();
    const tasks = [...useSelector(state => state.tasks.tasks)];
    const { id } = useParams();
    const currentTask = tasks.find(t => t.id == id); // === does not work on proxies

    if (!currentTask) {
        return <NotFoundView />;
    } else {
        return (
            <>
                <h2>Task details</h2>
                <form onSubmit={ upsertTask }>
                    <Hidden id="id" defaultValue={ currentTask.id } />
                    <FormGroup>
                        <Checkbox id="state" label="⠀Active task" defaultChecked={ currentTask.state } disabled />
                    </FormGroup>
                    <FormGroup>
                        <InputText id="title" label="Title" defaultValue={ currentTask.title } disabled />
                    </FormGroup>
                    <FormGroup>
                        <InputMultiline id="description" label="Description" disabled>{ currentTask.description }</InputMultiline>
                    </FormGroup>
                    <FormGroup>
                        <Link to={ Config.Routes.Home }>
                            <SecondaryButton>Back</SecondaryButton>
                        </Link>
                    </FormGroup>
                </form>
            </>
        );
    }
}
