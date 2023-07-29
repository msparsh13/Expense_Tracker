import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalProvider , useGlobalContext } from './context/globalcontext';

import { createRoot } from 'react-dom/client';
import IForm from './form/form';

const root = createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
    <GlobalProvider>
   <App />
    </GlobalProvider>
  </React.StrictMode>

);
