import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import Sidebar from './Sidebar/Sidebar.jsx'
import Logo from '../../assets/logo.png'
import * as C from './styles'
import { Link, useLocation } from 'react-router-dom'


function Header () {
    const [changeBackground, setChangeBackground] = useState(false)
    const [isOpen, setIsOpen] = useState (false)
    const {pathname} = useLocation()

    const showSiderbar = () => {
        setIsOpen(!isOpen)
    } 
    window.onscroll = () => {
        if(!changeBackground && window.pageYOffset > 150) {
            setChangeBackground(true)
        }
        if (changeBackground && window.pageYOffset <= 150) {
            setChangeBackground(false)
        }
    }

    return (
        <>
        <C.Container changeBackground={changeBackground}>
            <img src={Logo} alt="Logo" />
            <C.Menu>
                <C.Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </C.Li>
                <C.Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </C.Li>
                <C.Li isActive={pathname.includes('series')}>
                    <Link to="/series">Séries</Link>
                </C.Li>
            </C.Menu>
            <C.ContainerIcon>
                <FaBars onClick={showSiderbar} />
                {isOpen && <Sidebar active={setIsOpen} />}
            </C.ContainerIcon>
        </C.Container>
        </>
    )
}



export default Header