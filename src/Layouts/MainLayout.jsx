import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Menu/>
      <div className="ms-5">
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout