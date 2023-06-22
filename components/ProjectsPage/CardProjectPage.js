import styled from 'styled-components'

const CardProjectPage = styled.div`
    background-color: ${props => props.bgColor};
    align-self: start;
    margin-top: 10px;
    margin-left: 80px;
    width: max-content;
    padding: 3px 30px;
    font-family: 'Manrope', sans-serif;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1080px) {
        align-self: center;
        margin: 5vh 0;
    }
`

export default CardProjectPage;