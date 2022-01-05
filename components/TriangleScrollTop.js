import styled from 'styled-components'

const TriangleScrollTop = styled.div`
    position: fixed;
    background-color: ${props => props.bgColor};
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 30px;
    right: 100px;
    cursor: pointer;
    transition: all 1s;
    @media (max-width: 1080px) {
        display: none;
    }
`

export default TriangleScrollTop;