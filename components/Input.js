import styled from 'styled-components'

const Input = styled.input`
    font-family: 'Signika', sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
    color: white;
    background-color: black;
    height: 36px;
    padding-left: 10px;
    padding-right: 45px;
    width: 77.5%;
    border: white solid 1px;
    background: url(/inputImage.svg) no-repeat scroll 7px 7px;
    background-position: right;
    
    ::placeholder{
        color: white;
        text-align: left;
        ::after{
            content: '*';
        position: absolute;
        width: 20%;
        height: 36px;
        background-color: white;
        }
    }
    filter: drop-shadow(0px 1px 3px rgba(255, 255, 255, 0.15));
    @media (max-width: 1080px) {
        width: 80vw;
    }
`

export default Input;