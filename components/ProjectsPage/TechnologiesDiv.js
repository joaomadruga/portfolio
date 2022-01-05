import styled from 'styled-components'

const TechnologiesDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        margin: 0 30px;
    }
    div:nth-of-type(1) > div{
        margin: 0;
    }
    @media (max-width: 1080px) { 
      flex-direction: column;
    }
`

export default TechnologiesDiv;