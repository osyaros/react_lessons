import React from 'react'
import { ReactDOM } from 'react'
import App from './App.jsx'
import './index.css'
import { Router } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { About } from

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App />,
      children: [
        {
          path:"about",
          element: <About />
        }
      ]

      },
  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
