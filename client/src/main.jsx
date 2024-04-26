import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import if using Redux
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Adjust the path as necessary
import store from './utils/store'; // Adjust the path as necessary if using Redux
import './index.css'; // Assuming global styles are placed here
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Only include this line if using Redux */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);