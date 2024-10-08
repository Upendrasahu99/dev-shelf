import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import HomePage from "../pages/HomePage"
import HtmlPage from "../pages/HtmlPage"
import CssPage from "../pages/CssPage"
import JavascriptPage from "../pages/JavascriptPage"
import Tailwind from "../pages/Tailwind"
import DesignPage from "../pages/DesignPage"
import SystemDesign from "../pages/SystemDesign"
import ReactPage from "../pages/ReactPage"
import NodePage from "../pages/NodePage"
import DatabasePage from "../pages/DatabasePage"
import AnimationPage from "../pages/AnimationPage"
import WebsiteBuilder from "../pages/WebsiteBuilder"

const AppRoute = () => {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children:[
        {
          index: true,
          element: <Navigate to={'/home'}/>
        },{
          path: '/home',
          element: <HomePage/>
        },{
          path: '/html',
          element: <HtmlPage/>,
        },{
          path: '/css',
          element: <CssPage/>
        },{
          path: '/javascript',
          element: <JavascriptPage/>
        },{
          path: '/tailwind',
          element: <Tailwind/>
        },{
          path: '/design',
          element: <DesignPage/>
        },{
          path: '/system-design',
          element: <SystemDesign/>
        },{
          path: '/react',
          element: <ReactPage/>
        },{
          path: '/node',
          element: <NodePage/>
        },{
          path: '/database',
          element: <DatabasePage/>
        },{
          path:'/animation',
          element: <AnimationPage/>
        },{
          path: '/website',
          element: <WebsiteBuilder/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={route}/>
  )
}

export default AppRoute