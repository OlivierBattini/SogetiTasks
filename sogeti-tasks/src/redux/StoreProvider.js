import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import tasksReducer from './tasks/TasksSlice';

const Store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
}, applyMiddleware(thunk));

const StoreProvider = ({ children }) => {
    return <Provider store={Store}>
        {children}
    </Provider>;
};

export default StoreProvider;