import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Acceuil from './pages/acceuil/acceuil.jsx'
import { Contact } from 'lucide-react'
import Blog from './pages/blog/Blog.jsx'
import BlogDetails from './pages/blog/blogDetails.jsx'
import RootLayout from './pages/layouts/rootLayout.jsx'

const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[

      {
      path:"/",
      element:<Acceuil/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:"/blogs",
      element:<Blog/>,
    },
    {
      path:"/blog/:id",
      element:<BlogDetails/>,
    },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
