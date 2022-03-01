import React from "react";
import { ButtonMenu, ButtonMenuBlack, Content, Wrapper } from "./ButtonTwoStyle";
import { useState } from "react";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";
import "../components/styles/styles.css";
import "../index.css";

const ButtonTwo = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ------------------------------

  // handle set isOpen

  const handleSetIsOpen = () => {
    setIsOpen((prevBool) => !prevBool);
  };

  return (
    <Wrapper>
      <Content>
        <ButtonMenu
          onClick={handleSetIsOpen}
          className={isOpen ? "off-item" : "on"}
        />

        {pages.map(([page], index) => (
          <Link
            to={page === "Home" ? `/` : `/${page}`}
            className={isOpen ? "menu-item" : "menu-item-closed"}
          >
            <MenuItem
              key={page}
              page={page}
              menuIsOpen={isOpen}
              transitionDelay={index * 75}
            />
          </Link>
        ))}
      </Content>
    </Wrapper>
  );
};

export default ButtonTwo;
