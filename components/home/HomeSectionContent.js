import styled from 'styled-components'

const HomeSectionContent = styled.div`
    display: flex; 
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 95%;
    --animate-delay: 0.1s;
    @media (max-width: 1080px) {
        width: 100vw;
        height: 100%;
        .Typewriter, .Typewriter__wrapper, .Typewriter__cursor{
            max-width: 100vw !important;
        }
    }
`

export default HomeSectionContent;