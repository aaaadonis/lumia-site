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
  font-size: 1em;
  text-align: center;
  padding: 0px 10%;
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  height: auto;
  display: inline-block;
  position: absolute;
`;


export const ImgMain = styled.img`
    width: 25%;
    height: auto;
    @media (max-width: 800px) {
    width: 50%;
    }  
`