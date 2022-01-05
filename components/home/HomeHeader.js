import styled from 'styled-components'

const HomeHeader = styled.header`
    color: #fff;
    font-family: 'Signika', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    text-align: center;
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 1080px) {
        #roundedImage{
            display: none !important;
        }
        height: 0;
    }
    .spinImage{
        animation: spinImage 1s ease;
    }

    @keyframes spinImage {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    
`

export default HomeHeader;