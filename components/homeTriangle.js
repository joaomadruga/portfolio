import styled from "styled-components";

const HomeTriangle = styled.div`
    animation: ${props => props.animation} ${props => props.animationTime} ease-in-out infinite;
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        25%{
            transform: rotate(90deg);
        }
        50%{
            transform: rotate(180deg);
        }
        75%{
            transform: rotate(270deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }


`

export default HomeTriangle;