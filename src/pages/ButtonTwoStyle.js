import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 30px 0;
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
    padding: 0px;
    height: 15px;
    width: 15px;
  }
`;
