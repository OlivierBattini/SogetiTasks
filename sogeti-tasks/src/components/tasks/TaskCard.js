import { Link } from 'react-router-dom';

import './TaskCard.css';

export default function TaskCard({ id, state, title, onStatusSwitch, editLink }) {
    return (
        <div className="taskcard">
            <label className="taskcard--title"><input className="taskcard--state" type="checkbox" defaultChecked={ state ? 'checked' : ''} onClick={ onStatusSwitch }/>{ title }</label>



            <div className="taskcard--editlink">
                <Link to={editLink}>🔎︎</Link>
            </div>
        </div>
    );
}
