import styled from "styled-components";

export const Container = styled.div`
    min-height: 100px;
    width: 100vw;
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background-color: ${props => props.changebackground ? '#000000' : 'transparent'};
    transition: background-color 1s ease-in-out;

    img {
        width: 25%;
    }
`

export const Menu = styled.div`
    display: flex;
    justify-content: end;
    list-style: none;
    gap: 50px;
    width: 100%;
    padding-right: 100px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Li = styled.div`
    font-size: 28px;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    a {
        text-decoration: none;
        color: #ffffff;
    }

    &::after {
        content: "";
        height: 3px;
        width: ${props => (props.isactive ? '100%' : '0')};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`

export const ContainerIcon = styled.div `

     > svg {
        display: none;
    }

    @media (max-width: 768px) {
        margin-right: 30px;

        > svg {
            display: flex; 
            position: fixed;
            color: #ffffff;
            width: 30px;
            height: 30px;
            margin-top: -13px;
            cursor: pointer;
        }
    }
`

