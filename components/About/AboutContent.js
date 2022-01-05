import styled from 'styled-components'

const AboutContent = styled.div`
    display: flex; 
    width: 80%;
    height: 80%;
    flex-direction: column;
    @media (max-width: 1080px) {
        width: 100vw;
        height: 100%;
        margin: 0 !important;
        div:last-child{
            h1{
                font-size: 24px;
                width: 300px;
                text-align: justify;
            }
            margin: 0 !important;
            display: flex;
            flex-direction: column-reverse !important;
            align-items: center !important;
            justify-content: center !important;
            div:last-child, div:last-child > div:first-child{
                width: 300px;
                height: 300px;
            }
            div:last-child > div:last-child > div{
                bottom: -12px;
            }
            
        }
    }
    div:last-child{
            div:last-child > div:last-child > div{
                top: 4%;
                width: 100%;
                height: 100%;
            }
        }
`

export default AboutContent;