import styled from "styled-components";

type FlexWrapperType = {
    direction?: string
    align?: string
    justify?: string
    wrap?: string
}
export const FlexWrapper = styled.div<FlexWrapperType>`
    display: flex;
    flex-direction: ${({direction}) => direction || "row"};
    flex-wrap: ${({wrap}) => wrap || "nowrap"};
    align-items: ${({align}) => align || "stretch"};
    justify-content: ${({justify}) => justify || "flex-start"};
`