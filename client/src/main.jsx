import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './utils/store'; // Update this path if necessary
import './index.css'; // Assuming global styles are placed here
// Grab the root element
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
// Create a root
const root = ReactDOM.createRoot(rootElement);
// Initial render: Render the <App /> into the root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);