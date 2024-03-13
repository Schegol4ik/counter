import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Settings} from "./components/Settings";
import {Counter} from "./components/Counter";
import {FlexWrapper} from "./styles/FlexWrapper";
import styled from "styled-components";

export type EnterSettingType = null | "enter values and press \"set\" "

export type ValueType = {
    counterValue: number
    startValue: number
    maxValue: number
}

export type ErrorsType = {
    errorSetting: boolean,
    enterSetting: EnterSettingType
}

const App = () => {

    const [value, setValue] = useState<ValueType>({
        counterValue: 0,
        startValue: 0,
        maxValue: 0,

    })
    const [errors, setErrors] = useState<ErrorsType>({
        errorSetting: false,
        enterSetting: null
    })

    useEffect(() => {
        let startValueLocal = localStorage.getItem("start_value")
        let maxValueLocal = localStorage.getItem("max_value")
        if (startValueLocal && maxValueLocal) {
            setValue({
                ...value,
                startValue: JSON.parse(startValueLocal),
                maxValue: JSON.parse(maxValueLocal),
                counterValue: JSON.parse(startValueLocal)
            })

        }
    }, []) //Подгружаем значения из localstorage


    useEffect(() => {
        if (value.startValue >= value.maxValue || value.startValue < 0 || value.maxValue <= 0) {
            setErrors({...errors, errorSetting: true})
        } else setErrors({...errors, errorSetting: false})
    }, [value.startValue, value.maxValue]) // Валидация настроек
    const SaveValue = () => {
        if (value.startValue < value.maxValue) {
            localStorage.setItem("max_value", JSON.stringify(value.maxValue))
            localStorage.setItem("start_value", JSON.stringify(value.startValue))
            setValue({...value, counterValue: value.startValue})
            setErrors({...errors, enterSetting: null})
        }
    } //Сохраняем настройки

    return (
        <MainStyle>
            <FlexWrapper justify="center" align="center">
                <Settings
                    setErrors={setErrors} value={value} errors={errors}
                    setValue={setValue}
                    saveValue={SaveValue}/>
                <Counter setErrors={setErrors} value={value} errors={errors}
                         setValue={setValue}
                         saveValue={SaveValue}/>
            </FlexWrapper>
        </MainStyle>
    );
};

export default App;

const MainStyle = styled.div`
    margin: 100px 0;
`