import styled from "styled-components";

const LoadingText = styled.h1`
    animation: ${props => props.animation} ${props => props.animationTime} ease-in-out infinite;
`

export default LoadingText;