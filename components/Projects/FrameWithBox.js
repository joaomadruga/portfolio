import styled from 'styled-components'

const FrameWithBox = styled.div`
    display: flex; 
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 1080px) {
        margin: 5vh;
    }
    
`

export default FrameWithBox;