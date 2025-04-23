import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './App';

// import {Provider} from 'react-redux'
// import {store} from 'shared/store';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />)


// we need it with Provider when we want to run auth app as standalone otherwise host app is already wrap with the Provider

// const root = createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// )