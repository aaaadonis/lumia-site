import styled from "styled-components";


export const Wrapper = styled.div`
  bottom: 0;
  max-width: 100vw;
  height: auto;
  margin-top: 37%;
  @media (max-width: 800px) {
    margin-top: 115%;
  }
`;

export const Content = styled.div`
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonMenu = styled.button`
  margin-bottom: 2%;
  bottom: 0;
  position: fixed;
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
