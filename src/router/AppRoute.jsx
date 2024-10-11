import { createBrowserRouter, createHashRouter, RouterProvider, Navigate } from "react-router-dom"
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
      path: '/dev-shelf',
      element: <MainLayout/>,
      children:[
        {
          index: true,
          element: <Navigate to={'/dev-shelf/home'}/>
        },{
          path: '/dev-shelf/home',
          element: <HomePage/>
        },{
          path: '/dev-shelf/html',
          element: <HtmlPage/>,
        },{
          path: '/dev-shelf/css',
          element: <CssPage/>
        },{
          path: '/dev-shelf/javascript',
          element: <JavascriptPage/>
        },{
          path: '/dev-shelf/tailwind',
          element: <Tailwind/>
        },{
          path: '/dev-shelf/design',
          element: <DesignPage/>
        },{
          path: '/dev-shelf/system-design',
          element: <SystemDesign/>
        },{
          path: '/dev-shelf/react',
          element: <ReactPage/>
        },{
          path: '/dev-shelf/node',
          element: <NodePage/>
        },{
          path: '/dev-shelf/database',
          element: <DatabasePage/>
        },{
          path:'/dev-shelf/animation',
          element: <AnimationPage/>
        },{
          path: '/dev-shelf/website',
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