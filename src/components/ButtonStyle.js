import styled from "styled-components";


export const Wrapper = styled.div`
  max-width: 100vw;
  height: auto;
  position: relative;
  margin-top: 38%;
  // @media (max-width: 800px) {
  //   top: 220px;
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
    margin-top: 2%;
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
    background-color: transparent;
    border: 1.8px solid black;
    cursor: pointer;
`
export const ButtonMenuBlack = styled.button`
    margin-top: 2%;
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    background-color: black;
    border: 1px solid black;
    cursor: pointer;
    display: none;
`