import React from 'react';
import ReactDOM from 'react-dom/client';

import StoreProvider from './redux/StoreProvider';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
);