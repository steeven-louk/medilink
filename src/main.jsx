import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Acceuil from './pages/acceuil/acceuil.jsx'
// import { Contact } from 'lucide-react'
import Blog from './pages/blog/Blog.jsx'
import BlogDetails from './pages/blog/blogDetails.jsx'
import RootLayout from './pages/layouts/rootLayout.jsx'
import Contact from './pages/contact/contact.jsx'
import NotrePilulier from './pages/notrePilulier/notrePililuer.jsx'
import Boutique from './pages/boutique/boutique.jsx'
import ConditionsUtilisation from './pages/condition-general/condition.jsx'
import Cart from './pages/cart/cart.jsx'

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
      path:"/blog/:slug",
      element:<BlogDetails/>,
    },
    {
      path:"/notrePilulier",
      element:<NotrePilulier/>,
    },
    {
      path:"/boutique",
      element:<Boutique/>,
    },
    {
  path:"/conditions-utilisation",
  element:<ConditionsUtilisation/>,
},
{
  path:"/cart",
  element:<Cart/>,
}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
