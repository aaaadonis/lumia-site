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
  font-family: gopher, sans-serif;
  text-align: center;
  width: 600px;
  font-size: 0.9em;
  line-height: 30px;
  margin: 30px auto;
  overflow: hidden;
  @media (max-width: 800px) {
    line-height: 15px;
    font-size: 0.7em;
    width: 250px;
  }
`;

export const TextWrapper = styled.div`
  font-family: gopher, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 0.8em;
  font-weight: lighter;
`;

export const TextWrapperP = styled.div`
  width: 900px;
  margin: 10px auto;
  text-align: center;
  @media (max-width: 800px) {
    width: 250px;
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
    width: 10%;
  }
`;
