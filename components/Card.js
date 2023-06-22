import styled from 'styled-components'

const Card = styled.div`
    background-color: ${props => props.bgColor};
    width: 100px;
    font-family: 'Space Grotesk', sans-serif;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1080px) {
        align-self: center;
        margin: 5vh 0;
    }
`

export default Card;