import React from 'react'
import { ButtonMenu, ButtonMenuBlack, Content, Wrapper } from './ButtonStyle'
import { useState } from 'react'
import MenuItem from './MenuItem'
import {Link} from 'react-router-dom'
import "./styles/styles.css"


const Button = ({pages}) => {
    const [isOpen, setIsOpen] = useState(false);

    // ------------------------------

    // handle set isOpen

    const handleSetIsOpen = () => {
      setIsOpen(prevBool => !prevBool);
    };

    return (
        <Wrapper>
            <Content>
                <ButtonMenu onClick={handleSetIsOpen} />

                {pages.map(([page], index) => (
                    <Link to={`/${page}`} className={isOpen ? "menu-item" : "menu-item-closed"}>
                    <MenuItem
                        key={page}
                        page={page}
                     menuIsOpen={isOpen}
                     transitionDelay={index * 75}
                    /></Link>
                    ))}

            </Content>
        </Wrapper>
    )
}

export default Button
