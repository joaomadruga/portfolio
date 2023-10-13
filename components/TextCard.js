import styled from 'styled-components'

const TextCard = styled.h1`
    color: ${props => props.color};
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    text-overflow: ellipsis;
`

export default TextCard;