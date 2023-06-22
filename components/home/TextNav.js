import styled from 'styled-components'

const TextNav = styled.p`
    cursor: pointer;
    color: #000;
    font-size: 1.09rem;
    font-weight: 500;
    position: relative;

    :before{
    content: "";
    position: absolute;
    left: 0;
    right: 100%;
    bottom: 0;
    background: ${props => props.selectedColor};
    height: 3px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    }
    :hover:before{
        right: 0;
    }
`

export default TextNav;