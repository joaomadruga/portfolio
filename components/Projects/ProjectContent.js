import styled from 'styled-components'

const ProjectContent = styled.div`
    display: flex; 
    width: 80%;
    height: 80%;
    flex-direction: column;
    @media (max-width: 1080px) {
        width: 100vw;
        height: 100%;
        > :nth-child(2){
            flex-direction: column !important;
            width: 100vw;
        }
    }
    div:nth-of-type(2){
        .FrameWithBox1, .FrameWithBox1 > div{
        animation-delay: 1s;
       }
       .FrameWithBox2, .FrameWithBox2 > div{
        animation-delay: 2s;
       }
       .FrameWithBox3, .FrameWithBox3 > div{
        animation-delay: 3s;
       }
    }
    
 
`

export default ProjectContent;