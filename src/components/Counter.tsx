import React from 'react';
import {ErrorsType, ValueType} from "../App";
import {Button} from "./ui/Button";
import styled, {css} from "styled-components";
import {ButtonPanelStyle} from "./Settings";
import {FlexWrapper} from "../styles/FlexWrapper";

type CounterType = {
    setValue: (value: ValueType) => void
    setErrors: (value: ErrorsType) => void
    saveValue: () => void
    value: ValueType
    errors: ErrorsType
}
export const Counter = ({saveValue, value, setValue, setErrors, errors}: CounterType) => {


    const disableIncButton = () => {
        return value.counterValue === value.maxValue || errors.enterSetting !== null
    }//проверка дисйбла кнопки
    const incCounter = () => {
        setValue({...value, counterValue: value.counterValue + 1})
    }// Добавляем значение счетчика

    const counterValue = () => {
        if (errors.enterSetting === null) {
            return <ValueStyle
                 counterValue={value.counterValue} maxValue={value.maxValue}
            >{value.counterValue}</ValueStyle>
        } else if (errors.errorSetting) {
            return <IncorrectValueStyle>Incorrect value</IncorrectValueStyle>
        } else return <h2>{errors.enterSetting}</h2>
    }// Отрисовка в счетчика и ошибок

    return (
        <CounterStyle>
            <DisplayCounterStyle>
                {counterValue()}
            </DisplayCounterStyle>
            <ButtonPanelStyle>
                <FlexWrapper justify="space-around">
                    <Button title="inc" onClickHandler={incCounter} disable={disableIncButton()}/>
                    <Button title="reset" onClickHandler={() => setValue({...value, counterValue: value.startValue})}
                            disable={errors.enterSetting !== null}/>
                </FlexWrapper>
            </ButtonPanelStyle>
        </CounterStyle>
    );
};

const CounterStyle = styled.div`
    border: 2px solid #79D7EF;
    border-radius: 5px;
    margin-left: 30px;
    min-width: 300px;
    max-width: 400px;
    min-height: 275px;
    width: 100%;
`

const DisplayCounterStyle = styled.div`
    margin: 20px;
    padding: 40px;
    height: 130px;
    max-width: 100%;
    border: 2px solid #79D7EF;
    border-radius: 5px;
`

const IncorrectValueStyle = styled.h2`
    color: #ff2323;
`

const ValueStyle = styled.h1<{maxValue: number,counterValue: number }>`
    ${(props) => props.maxValue === props.counterValue && css`
        color: #ff2323;
    `}
`