import styled from "styled-components";


export const Wrapper = styled.div`
    max-width: 100vw;
    position: relative;
    margin-top: 38%;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ButtonMenu = styled.button`
    margin-top: 2%;
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
`
export const ButtonMenuBlack = styled.button`
    margin-top: 2%;
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    background-color: black;
    border: 1px solid black;
    cursor: pointer;
    display: none;
`

export const MenuItem = styled.div`
    display: none;
    font-size: 1em;
    margin: 0 2%;
`
