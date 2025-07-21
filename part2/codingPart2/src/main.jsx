import React  from "react";
import ReactDOM from 'react-dom/client';
import App from './App';

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        importat: true
    },
    {
        id: 2,
        content: 'Browser can only execute JavaScript',
        importat: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        importat: true
    },
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes}/>
);