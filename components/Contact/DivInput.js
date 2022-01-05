import styled from 'styled-components'

const DivInput = styled.div`
    display: grid;
    grid-template-columns: 400px 400px;
    

    div:nth-of-type(4) > input {
        background: none;
        width: 89%;
        padding-right: 0;
    }
    @media (max-width: 1080px) {
        div:nth-of-type(4) > input {
        width: 90vw;
    }
        
    }
`

export default DivInput;