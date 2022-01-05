import styled from 'styled-components'

const TextArea = styled.textarea`
    font-family: 'Signika', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    color: white;
    background-color: black;
    height: 36px;
    width: 90%;
    border: white solid 1px;
    filter: drop-shadow(0px 1px 3px rgba(255, 255, 255, 0.15));
    ::placeholder{
        color: white;
    }
`

export default TextArea;