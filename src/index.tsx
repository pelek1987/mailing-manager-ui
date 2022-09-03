import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto';

import { AppProviders } from 'components/AppProviders/AppProviders';
import { worker } from 'tests/mocks/browser';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

// // Start the mocking conditionally.
// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
