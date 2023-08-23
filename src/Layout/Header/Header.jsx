import styles from './Header.module.scss'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
//import "bootstrap/dist/js/bootstrap.bundle.min";
import styled from 'styled-components'

import {Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '/images/developers.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Header()
{
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const LogoImage = styled.img`
    vertical-align: middle;
    border-style: none;
    display: block;
    width: 100%;
    margin-right: 5px;
    width: 30px;
    `
  
 const PrimaryNav = styled.nav`
  z-index: 14;
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
`

const Hambuger = styled.button`
  display: none;
  color: #ffffff;
  background:transparent;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 0.9rem;
    top: -16px;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
const Menu = styled.div`
  align-items: center;
  margin-right: -25px;
  margin-left: auto;
`
const UlNav = styled.ul`
display: flex;
padding: 0;
@media screen and (max-width: 768px) {
      position: absolute;
        top: 60px;
        left: 0;
        flex-direction: column;
        width: 100%;
        background-color: #0d012c;
        border-top: 1px solid black;
  }
`
const NavList = styled.li`
list-style-type: none;
  margin: 0 1rem;
  
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0;
    padding: 0.6em 0;
  border-bottom: 1px solid #3b3748;
}
`



    return(
        <>
            <header className={styles.main}>
                <Container className={styles.navbur}>
                    <Row className={styles.navi}>
                        <div className='col-xl-12 d-flex align-items-center lefty'>
                        <h5 className={styles.devman}><LogoImage src={logo} alt="" />Cap.dev <span className={styles.blink}> _</span></h5>
                        <PrimaryNav className="navigation">
                        <Hambuger
                            className="hamburger"
                            onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                            }}
                        >
                            <FontAwesomeIcon className={styles.svgbutton} icon={faBars} />
                        </Hambuger>
                        <Menu
                            className={
                            isNavExpanded ? "expanded" : `${styles.navigationmenu}`
                            }
                        >
                        
                        <UlNav className={styles.navlist}>
                        <NavList><Link className={styles.navlink} to={'/'}>Home</Link></NavList>
                        <NavList><Link className={styles.navlink} to={'/about'}>About</Link></NavList>
                        <NavList><Link className={styles.navlink} to={'/services'}>Services</Link></NavList>
                        <NavList><Link className={styles.navlink} to={'/skills'}>Skills</Link></NavList>
                        <NavList><Link className={styles.navlink} to={'/contact'}>Contact</Link></NavList>
                            </UlNav>
                            </Menu>
                            
                        </PrimaryNav>
                            
                        </div>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header