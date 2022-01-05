import styled from 'styled-components'

const ProjectPageContent = styled.div`
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: white;
    .showFrame::before{
        animation: borderInBottom 2s ease;
    }
    .showFrame::after{
        animation: borderInRight 2s ease;
    }
    .showBorder::before{
        animation: borderInTop 2s ease;
    }
    .showBorder::after{
        animation: borderInLeft 2s ease;
    }
    .hideFrame::before{
        animation: hideBorderInBottom 1.2s ease;
    }
    .hideFrame::after{
        animation: hideBorderInRight 1.2s ease;
    }
    .hideBorder::before{
        animation: hideBorderInTop 1.2s ease;
    }
    .hideBorder::after{
        animation: hideBorderInLeft 1.2s ease;
    }
    .showSwitcherAnimation{
        #switcher{
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: lineAnimation 5s linear forwards;
        }
    }
    @media (max-width: 1080px) { 
      width: 100%;
      height: 100%;

      div:nth-of-type(5){
          justify-content: center !important;
          align-items: center !important;
          flex-direction: column !important;
          width: 85vw !important;
      }
    }
`

export default ProjectPageContent;