import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  min-width: 100vw;
  height: auto;
  @media (max-width: 800px) {
    margin-top: 0px;
  }
`;

export const Content = styled.div`
  min-width: 100vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const ImgCard = styled.img`
  width: auto;
  height: 455px;
  padding: 0px;
  @media screen and (min-width: 1300px) {
    height: 580px;
  }
  @media (max-width: 800px) {
    height: 400px;
    object-fit: contain;
    width: 78%;
  }
`;
export const Text = styled.p`
  align-self: center;
  font-family: gopher, sans-serif;
  font-size: 0.8em;
  text-align: center;
  padding: 0px;
  display: inline-block;
`;
