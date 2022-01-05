import styled from 'styled-components'

const Box = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 360;
    font-size: 1.5rem;
    width: 70%;
    height: 7%;
    background-color: ${props => props.bgColor};
    color: white;
    border: white;
    transition: all 800ms;
    :hover {
        transition: all 500ms;
        background-color: ${props => props.bgColorHover};
    }

    @media (max-width: 1080px) {
        margin: 10px;
        height: 40px;
        width: 53%;
    }
`

export default Box;