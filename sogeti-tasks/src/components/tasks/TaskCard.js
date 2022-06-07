export default function TaskCard({ id, state, title }) {
    return (
        <div className="taskcard">
            <label className="taskcard--title"><input className="taskcard--state" type="checkbox" defaultChecked={ state ? 'checked' : ''} />{ title }</label>
        </div>
    );
}
