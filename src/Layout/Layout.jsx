import styled from 'styled-components'
import Home from "../Pages/Home/Home"
import AboutMe from "../Components/AboutMe"
import Services from "../Components/Services"
import Skills from "../Components/Skills"
import Work from "../Components/Work"
import Newsletter from "../Components/Newsletter"
import ContactMe from "../Components/ContactMe"
//import { Outlet } from "react-router-dom"
//import { useLocation } from "react-router-dom"

function Layout()
{
    const MainDiv = styled.main`
    position: relative;
    width:100%;
    height:100%;
    `
    //const { pathname } = useLocation()

    return(
        <>
        <MainDiv>
        <Home />
        <AboutMe />
        <Services />
        <Skills />
        <Work />
        <Newsletter />
        <ContactMe />
        </MainDiv>
        </>
    )
}

export default Layout