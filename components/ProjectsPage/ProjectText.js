import styled from 'styled-components'

const ProjectText = styled.h1`
    color: ${props => props.color};
    font-weight: 500;
    font-size: 1.2rem;
    @media (max-width: 1080px) { 
      width: 85vw !important;
    }
    @media (min-width: 1080px) and (max-width: 1400px){ 
      font-size: 1.1rem;
    }
`

export default ProjectText;