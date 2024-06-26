import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import './index.css'

function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/quiz",
      element: <Quiz />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
