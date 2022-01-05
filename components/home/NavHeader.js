import styled from 'styled-components'

const NavHeader = styled.div`
    background-color: #fff;
    width: 25vw;
    height: 5vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    @media (max-width: 1080px) {
        display: none;
    }
`

export default NavHeader;