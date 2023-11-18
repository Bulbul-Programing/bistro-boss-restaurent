import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
