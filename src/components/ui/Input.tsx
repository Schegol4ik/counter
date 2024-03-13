import React from 'react';
import styled, {css} from "styled-components";

type InputType = {
    value: number
    onChangeHandler: (value: number) => void
    type?: string
    errorSetting: boolean
}

export const Input = ({onChangeHandler, value, errorSetting}: InputType) => {
    return (
        <InputStyle
            errorSetting={errorSetting}
            value={value}
            type="number"
            onChange={e => onChangeHandler(Number(e.currentTarget.value))}
        />
    );
};

const InputStyle = styled.input<{ errorSetting: boolean}>`
    border: 2px solid #61dafb;
    outline: none;
    border-radius: 5px;
    margin-left: 10px;
    max-width: 150px;
    font-weight: bold;
    text-align: center;

    ${(props) => props.errorSetting && css`
        background-color: #EE9CAE;
        border: 2px solid #D71742;
    `}
`
