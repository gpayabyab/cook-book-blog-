import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});
import './index.css'; // Assuming global styles are placed here
// Grab the root element
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
// Create a root
const root = ReactDOM.createRoot(rootElement);
// Initial render: Render the <App /> into the root
root.render(
  <React.StrictMode>
  
    <ApolloProvider client={client}>
        <App />
        </ApolloProvider>, 
  
  </React.StrictMode>
);