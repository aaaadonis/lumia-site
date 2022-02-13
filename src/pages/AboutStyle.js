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
  text-align: center;
  width: 600px;
  font-size: 1em;
  line-height: 30px;
  margin: 30px auto;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  // width: 900px;
  //   text-align: center;
  //   padding: 0px 8%;

`;

export const TextWrapperP = styled.div`
  width: 900px;
  margin: 10px auto;
  text-align: center;
  @media (max-width: 800px) {
    width: 800px;
  }
`;

export const ImgMain = styled.img`
  width: 25%;
  height: auto;

`;

export const Instagram = styled.img`
  width: 2%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 5%;
  @media (max-width: 800px) {
    width: 13%;
  }
`;
