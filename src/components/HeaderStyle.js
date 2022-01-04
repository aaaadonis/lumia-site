import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
`;


export const Wrapper = styled.div`
    margin-top: 2vh;
    max-width: 100vw;
    height: 18vh;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoImg = styled.img`
    width: 7.5rem;
    height: auto;
    animation: ${rotate} 8s infinite linear;

    @media screen and (max-width: 500px){
        max-width: 50%;
    }
    
`;

