import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
//import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Layout()
{
    const { pathname } = useLocation()

    return(
        <>
        {pathname === "/" ? <Home /> : <About />}
        </>
    )
}

export default Layout