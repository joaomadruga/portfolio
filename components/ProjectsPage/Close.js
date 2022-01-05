import styled from 'styled-components'

const Close = styled.div`
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
    svg{
            width: 30px;
            height: 30px;
    }
    path{
        transition: all 1s;
    }
    @media (max-width: 1080px) {
        svg{
            width: 30px;
            height: 30px;
        }
    }
`

export default Close;