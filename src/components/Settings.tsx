import React from 'react';
import {ErrorsType, ValueType} from "../App";
import {Button} from "./ui/Button";
import styled from "styled-components";
import {FlexWrapper} from "../styles/FlexWrapper";
import {ValueSetting} from "./ValueSetting";

type SettingsType = {

    setValue: (value: ValueType) => void
    setErrors: (value: ErrorsType) => void
    saveValue: () => void
    value: ValueType
    errors: ErrorsType
}
export const Settings = ({
                             errors,
                             value,
                             saveValue,
                             setValue,
                             setErrors
                         }: SettingsType) => {


    const onHandlerMaxValue = (valueCounter: number) => {
        setErrors({...errors, enterSetting: "enter values and press \"set\" "})
        setValue({...value, maxValue: valueCounter})

    } //Устанавливаем макс значения счетчика
    const onHandlerStartValue = (valueCounter: number) => {
        setErrors({...errors, enterSetting: "enter values and press \"set\" "})
        setValue({...value, startValue: valueCounter})

    } //Устанавливаем стартовые значения счетчика

    return (
        <SettingsStyle>
            <ItemValueStyle>
                <ValueSetting title="max value:" value={value.maxValue} onHandlerValue={onHandlerMaxValue}
                              errorSetting={errors.errorSetting}/>
                <ValueSetting title="start value:" value={value.startValue} onHandlerValue={onHandlerStartValue}
                              errorSetting={errors.errorSetting}/>
            </ItemValueStyle>
            <ButtonPanelStyle>
                <FlexWrapper align="center" justify="center">
                    <Button title="Set" onClickHandler={saveValue}
                            disable={errors.errorSetting || errors.enterSetting === null}/>
                </FlexWrapper>
            </ButtonPanelStyle>
        </SettingsStyle>
    );
};

const SettingsStyle = styled.div`
    border: 2px solid #79D7EF;
    border-radius: 5px;
    min-width: 300px;
    max-width: 400px;
    min-height: 275px;
    width: 100%;

`
const ItemValueStyle = styled.div`
    margin: 20px;
    padding: 20px;
    height: 130px;

    border: 2px solid #79D7EF;
    border-radius: 5px;

`
export const ButtonPanelStyle = styled.div`
    margin: 20px;
    padding: 20px;
    border: 2px solid #79D7EF;
    border-radius: 5px;

`