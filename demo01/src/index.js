import React from 'react';
import ReactDOM from 'react-dom/client';
import Example from './Example';
import Example2 from './Example2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Example />
    <Example2 />
  </React.StrictMode>
);