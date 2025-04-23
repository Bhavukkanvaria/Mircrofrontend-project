import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById('root'))
root.render(
    <App/>
)



// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);