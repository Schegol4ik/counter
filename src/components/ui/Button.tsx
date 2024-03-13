import React from 'react';
import styled from "styled-components";

type ButtonType = {
    title: string
    onClickHandler: () => void
    disable: boolean
}
export const Button = ({title,disable,onClickHandler}: ButtonType) => {
    return (
        <ButtonStyle
            onClick={onClickHandler}
            disabled={disable}
        >{title}</ButtonStyle>
    );
};

const ButtonStyle = styled.button`
    background-color: #61dafb;
    color: #282c34;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-weight: 1000;
    font-size: 20px;
    cursor: pointer;
    &:disabled {
    opacity: 0.5;
    }
`