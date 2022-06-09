export default function AlertDanger({ children }) {
    return (
        <div className="alert alert-danger" role="alert">
            { children }
        </div>
    );
};
