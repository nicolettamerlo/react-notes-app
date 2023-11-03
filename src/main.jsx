import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import store from './store.jsx';
import { Provider } from 'react-redux';
import { fetchNotes } from './features/notes/notesSlice.jsx';

store.dispatch(fetchNotes());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />      
    </Provider>
  </React.StrictMode>
)
