import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  height: auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p`
  font-family: Helvetica;
  font-size: 0.8em;
  text-align: center;
  padding: 0px 8%;
  font-weight: bolder;
`;


export const Instagram = styled.img`
  width: 35%;
  height: auto;
  @media (max-width: 800px) {
    width: 50%;
  }
`;