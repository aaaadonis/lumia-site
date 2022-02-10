import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  @media (max-width: 800px) {
    margin-top: 5%;
  }
`;

export const ImgCard = styled.img`
  width: 30%;
  height: auto;
  @media (max-width: 800px) {
    width: 80%;
  }
`;
export const Text = styled.p`
  font-family: Helvetica;
  font-size: 0.8em;
  text-align: center;
  padding: 0px 8%;
  display: inline-block;
  position: absolute;
`;
