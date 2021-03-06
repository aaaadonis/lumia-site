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
  @media (max-width: 800px) {
  }
`;

export const ImgCard = styled.img`
  width: auto;
  height: 65vh;
  padding: 0px;
  // @media screen and (min-width: 1300px) {
  //   height: 500px;
  // }
  @media (max-width: 800px) {
    height: 400px;
    object-fit: contain;
    width: 78%;
  }
  @media (max-height: 600px) {
    height: 58vh;
    object-fit: contain;
    width: 78%;
  }
`;
export const Text = styled.p`
  align-self: center;
  font-family: Helvetica;
  font-size: 0.8em;
  text-align: center;
  padding: 0px;
  // margin-right: 17%;
  display: inline-block;
  @media (max-width: 800px) {
    // margin-top: 53%;
    // margin-right: 55%;
  }
`;
