import React from 'react'
import Logo from '../images/lumia.png'
import { Wrapper, Content, LogoImg } from './HeaderStyle'

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={Logo} alt="Lumia Nocito" />
            </Content>
        </Wrapper>
    )
}

export default Header
