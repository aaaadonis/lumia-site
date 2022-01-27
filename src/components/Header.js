import React from 'react'
import Logo from '../images/lumia.png'
import { Wrapper, Content, LogoImg } from './HeaderStyle'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <Wrapper>
            <Link to="/">
            <Content>
                <LogoImg src={Logo} alt="Lumia Nocito" />
            </Content>
            </Link>
        </Wrapper>
    )
}

export default Header
