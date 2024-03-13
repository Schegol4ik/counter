import React from 'react';
import {Input} from "./ui/Input";
import {FlexWrapper} from "../styles/FlexWrapper";
import styled from "styled-components";

type ValueSettingType = {
    title: string
    value: number
    errorSetting: boolean
    onHandlerValue: (value: number) => void
}
export const ValueSetting = ({onHandlerValue, value, title, errorSetting}: ValueSettingType) => {
    return (
        <ValueSettingStyle>
            <FlexWrapper justify="space-between">
                <h2>{title}</h2>
                <Input value={value} onChangeHandler={onHandlerValue} errorSetting={errorSetting}/>
            </FlexWrapper>
        </ValueSettingStyle>
    );
};

const ValueSettingStyle = styled.div`
    margin: 10px 10px;


`