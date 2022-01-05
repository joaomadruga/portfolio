import styled from 'styled-components'

const ButtonSend = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-family: 'Signika', sans-serif;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: 1.3rem;
    margin-top: 38px;
    width: 250px;
    border-radius: 6px;
    height: 36px;
    background-color: #0084FF;
    color: #fff;
    border: none;
    transition: all 1s;
    :disabled{
        transition: all 1s;
        cursor: not-allowed;
        color: black;
        background-color: white;
    }
`

export default ButtonSend;