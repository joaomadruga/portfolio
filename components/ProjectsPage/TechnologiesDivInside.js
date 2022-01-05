import styled from 'styled-components'

const TechnologiesDivInside = styled.div`
    @media (max-width: 1080px) { 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        div{
            width: 120px;
            height: 120px;
        }
    }
    @media (max-width: 500px) { 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        div{
            max-width: 100px !important;
            max-height: 100px !important;
        }
    }
`

export default TechnologiesDivInside;