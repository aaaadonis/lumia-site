import styled from "styled-components";


export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 35px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonMenu = styled.button`
  height: 1rem;
  width: 1rem;
  border-radius: 100%;
  background-color: transparent;
  border: 1.8px solid black;
  cursor: pointer;
  @media (max-width: 800px) {
    bottom: 25px;
    margin-bottom: 4%;
    padding: 0px;
    height: 15px;
    width: 15px;
  }
`;