import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// react router dom package for routing
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full px-2 lg:px-4'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
