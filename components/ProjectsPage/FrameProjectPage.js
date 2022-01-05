import styled from 'styled-components'

const FrameProjectPage = styled.div`
    width: max-content;
    height: max-content;
    margin-top: 20px;
    position: relative;
    transition: all 1s ease;
    z-index: 999;
    overflow: hidden;
    @media (max-width: 1080px) {
      max-width: 100%;
      height: 100%;
      :nth-child(2), :nth-child(3){
        display: none;
      }
    }
    @media (min-width: 1080px) and (max-width: 1400px){ 
      margin: 20px;
    }
    ::before{
        //animation: borderInBottom 2s ease;
        transition: all 500ms ease;
        --webkit-transition: all 500ms ease;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 999;
        left: 0;
        top: 0;
        border-bottom: 3px solid ${props => props.color};
        box-sizing: border-box;
    }
    ::after{
      //animation: borderInRight 2s ease;
      transition: all 500ms ease;
      --webkit-transition: all 500ms ease;
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border-right: 3px solid ${props => props.color};
      box-sizing: border-box;
    }

    :hover{
      transition: all 400ms ease;
      transform: scale(1.1);
      --webkit-transform: scale(1.1);
      -o-transform: scale(1.1);
      .BlurImage{
        transition: all 600ms ease;
      }
      ::after, ::before ,#Border::after, #Border::before{
          transition: all 400ms ease;
          border-color: ${props => props.borderColor};
      }
    }

    

    @keyframes borderInBottom{
      0%{
        //transform: scaleX(0);
        right: 100%;
        width: 0;
      }
      100%{
        //transform: scaleX(1);
        right: 0;
        width: 100%;
       
      }
    }
    @keyframes borderInRight{
      0%{
        //transform: scaleY(0);
        bottom: 100%;
        height: 0;
      }
      100%{
        //transform: scaleY(1);
        bottom: 0;
        height: 100%;
       
      }
    }

    @keyframes hideBorderInBottom{
      0%{
        //transform: scaleX(1);
        right: 0;
        width: 100%;
       
      }
      100%{
        //transform: scaleX(0);
        right: 100%;
        width: 0;
      }
    }
    @keyframes hideBorderInRight{
      0%{
        //transform: scaleY(1);
        bottom: 0;
        height: 100%;
       
      }
      100%{
        //transform: scaleY(0);
        bottom: 100%;
        height: 0;
      }
    }
`

export default FrameProjectPage;