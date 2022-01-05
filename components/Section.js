import styled from 'styled-components'

const Section = styled.section`
    scroll-snap-align: end;
    background-color: #000;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-direction: ${props => props.flexDirection};
    @media (max-width: 1080px) {
        max-width: 100vw !important;
        height: 100%;
        :nth-child(2){
            height: 100vh;
        }
    }
`

export default Section;