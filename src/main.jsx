import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Organisations from './Pages/Organisations.jsx'
import Pets from './Pages/PetList.jsx'
import Home from './Pages/Home.jsx'
import PetDetails from './Pages/PetDetails.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },

  {
    path:"/organisation",
    element:<Organisations/>
  },
  {
    path:"/pets",
    element:<Pets/>
  },
  {
    path: "/pet-details/:id",
    element: <PetDetails/>
  }
]
  }
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
