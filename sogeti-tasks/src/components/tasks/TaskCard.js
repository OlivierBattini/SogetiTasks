export default function TaskCard({ id, state, title, onStatusSwitch }) {
    return (
        <div className="taskcard">
            <label className="taskcard--title"><input className="taskcard--state" type="checkbox" defaultChecked={ state ? 'checked' : ''} onClick={ onStatusSwitch }/>{ title }</label>
        </div>
    );
}
