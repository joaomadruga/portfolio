import styled from 'styled-components'

const ContactContent = styled.div`
    display: flex; 
    width: 80%;
    height: 90%;
    flex-direction: column;

    @media (max-width: 1080px) {
        width: 100vw;
        height: 100%;
        div:last-child > div{
            display: flex !important;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 100vw;
        }
        textarea{
            width: 90vw !important;
        }
        > div:last-child > h1 {
            margin: 30px 0 0 0 !important;
        }
    }
`

export default ContactContent;