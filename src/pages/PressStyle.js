import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  height: auto;
`;

export const MenuWrapper = styled.div`
  max-width: 20vw;
  height: auto;
  position: fixed;
  margin-top: 10%;
  margin-left: 3%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photography = styled.h1`
  font-family: Helvetica;
  font-size: 0.8em;
  padding: 0px 8%;
  color: #414141;
  cursor: pointer;
`;

export const Exhibitions = styled.h1`
  font-family: Helvetica;
  font-size: 0.8em;
  padding: 0px 8%;
  color: #414141;
  cursor: pointer;
`;

export const Features = styled.h1`
  font-family: Helvetica;
  font-size: 0.8em;
  padding: 0px 8%;
  color: #414141;
  cursor: pointer;
`;

export const Interviews = styled.h1`
  font-family: Helvetica;
  font-size: 0.8em;
  padding: 0px 8%;
  color: #414141;
  cursor: pointer;
`;

export const Honors = styled.h1`
  font-family: Helvetica;
  font-size: 0.8em;
  padding: 0px 8%;
  color: #414141;
  cursor: pointer;
`;


export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  margin-left: 100px;
  margin-bottom: 1em;
  @media (max-width: 800px) {
    margin-left: 2%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
`;

export const Logo = styled.img`
  width: 15%;
  height: auto;
`;

export const TitleText = styled.div`
  font-size: 1.2em;
  height: auto;
  font-weight: bolder;
`;

export const TitleYear = styled.div`
  font-size: 1.5em;
  height: auto;
  font-weight: bolder;
  margin: 20px 0;
`;
