import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Config from '../config/Config';

import MainView from '../views/MainView';
import TaskView from '../views/TaskView';
import NotFoundView from '../views/NotFoundView';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app container">
                <h1>{ Config.App.Title }</h1>
                <Routes>
                    <Route path={ Config.Routes.Home } exact element={<MainView />} />
                    <Route path={ Config.Routes.Task } exact element={<TaskView />} />
                    <Route path={ '*' } exact element={<NotFoundView />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
