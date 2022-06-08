import { Link } from 'react-router-dom';
import Config from '../config/Config';

import PrimaryButton from '../components/controls/PrimaryButton';

export default function NotFoundView() {

    return (
        <>
            <h1>🂡</h1><h2>These aren't the tasks you are looking for...</h2>

            <Link to={Config.Routes.Home}><PrimaryButton>Back</PrimaryButton></Link>
        </>
    );
}
