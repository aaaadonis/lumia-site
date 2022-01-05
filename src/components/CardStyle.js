import styled from "styled-components";


export const Wrapper = styled.div`
    max-width: 100vw;
    height: auto;
    display: flex;
    justify-content: space-between;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    @media (max-width: 800px) {
    margin-top: 25%;
    }
    @media (max-width: 1000px) {
    margin-top: 10%;
    }
`;

export const ImgCard = styled.img`
    width: 30%;
    height: auto;
    @media (max-width: 800px) {
    width: 50%;
    }  
`