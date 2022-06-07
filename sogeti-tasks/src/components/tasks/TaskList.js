import TaskCard from './TaskCard';

export default function TaskList({ tasks, onChange }) {
    return (
        <div className="tasklist">
            {
                tasks.map(task => {
                    return <TaskCard key={ task.id } id={ task.id } state={ task.state } title={ task.title } onChange={ onChange } />;
                })
            }
        </div>
    );
}
