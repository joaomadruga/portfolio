import styled from 'styled-components'

const Footer = styled.footer`
    background-color: white;
    width: 100vw;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1080px) {
        width: 100vw;
        height: 100%;
        margin: 0;
        flex-direction: column;
        justify-content: flex-start;
        a{
            display: none !important;
        }
    }
`

export default Footer;