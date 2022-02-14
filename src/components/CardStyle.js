import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  height: auto;
  @media (max-width: 800px) {
    margin-top: 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 800px) {
  }
`;

export const ImgCard = styled.img`
  width: 30%;
  height: auto;
  padding: 0px;
  @media (max-width: 800px) {
    width: 85%;
  }
`;
export const Text = styled.p`
  font-family: Helvetica;
  font-size: 0.8em;
  text-align: center;
  padding: 0px;
  margin-top: 38%;
  margin-right: 17%;
  display: inline-block;
  position: absolute;
  font-weight: bold;
  @media (max-width: 800px) {
    margin-top: 53%;
    margin-right: 35%;
  }
`;
