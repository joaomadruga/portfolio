import styled from 'styled-components'

const DottedCircleMobile = styled.div`
    display: none;
    @media (max-width: 1080px) {
        display: block;
        position: absolute;
        bottom: -40px;
        left: 0;
    }
`

export default DottedCircleMobile;