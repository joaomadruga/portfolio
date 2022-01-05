import styled from 'styled-components'

const DottedCircle = styled.div`
    position: absolute;
    left: -100px;
    bottom: -200px;
    @media (max-width: 1080px) {
        display: none;
    }
`

export default DottedCircle;