import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './component/Login.jsx'
import Profile from './component/Profile.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login/>}>
      <Route path='profile' element={<Profile/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
