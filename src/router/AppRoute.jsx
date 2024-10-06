import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import HomePage from "../pages/HomePage"


const AppRoute = () => {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children:[
        {
          index: true,
          element: <HomePage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={route}/>
  )
}

export default AppRoute