import styled from "styled-components";


export const Wrapper = styled.div`
  max-width: 100vw;
  height: auto;
  // margin-top: 38%;
  // @media (max-width: 800px) {
  //   margin-top: 115%;
  // }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    // @media (max-width: 800px) {
    // margin-top: 120%;
    // }
    // @media (max-width: 1000px) {
    // margin-top: 80%;
    // }
`;

export const ButtonMenu = styled.button`
  margin-bottom: 1%;
  bottom: 0;
  position: fixed;
  height: 1rem;
  width: 1rem;
  border-radius: 100%;
  background-color: transparent;
  border: 1.8px solid black;
  cursor: pointer;
  // border-collapse: separate;
  @media (max-width: 800px) {
    padding: 0px;
    height: 15px;
    width: 15px;
  }
`;
