import TaskCard from './TaskCard';

export default function TaskList({ tasks }) {
    return (
        <div className="tasklist">
            {
                tasks.map(task => {
                    return <TaskCard key={ task.id } id={ task.id } state={ task.state } title={ task.title } />;
                })
            }
        </div>
    );
}
