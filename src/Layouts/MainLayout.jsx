import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Menu/>
      <Outlet>
        <Outlet/>
      </Outlet>
    </div>
  )
}

export default MainLayout