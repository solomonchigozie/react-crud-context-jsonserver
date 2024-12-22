import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BooksContext, { Provider } from './context/books';
// import AllBooksContext from './context/allbooks';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
  // <AllBooksContext.Provider value={24}>
  //   <App />
  // </AllBooksContext.Provider>
);
