import React from 'react'
import { ButtonMenu, ButtonMenuBlack, Content, Wrapper } from './ButtonStyle'
import { useState } from 'react'
import MenuItem from './MenuItem'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import AboutMe from '../pages/AboutMe'
import Contact from '../pages/Contact'
import Personal from '../pages/Personal'
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
                <Router>
                {pages.map(([page], index) => (
                    <Link to={`/${page}`} className={isOpen ? "menu-item" : "menu-item-closed"}>
                    <MenuItem
                        key={page}
                        page={page}
                     menuIsOpen={isOpen}
                     transitionDelay={index * 75}
                    /></Link>
                    ))}
                    <Switch>
                        <Route path="/About" exact> <AboutMe /></Route>
                        <Route path="/Contact" ><Contact /></Route>
                        <Route path="/Personal" ><Personal /></Route>
                    </Switch>
                </Router>
            </Content>
        </Wrapper>
    )
}

export default Button
