import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createClient, Provider } from 'urql';


const client = createClient({
  url: 'https://api.spacex.land/graphql/',
});


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider value={client}>
    <App />
  </Provider>,
);
