import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/App';
import reportWebVitals from './reportWebVitals.js';
import store from './services/store';
// import store from './services/store';

const domNode = document.getElementById('root') as HTMLDivElement;

const root = ReactDOM.createRoot(domNode);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
