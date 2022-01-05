import styled from 'styled-components'

const Frame = styled.div`
    width: 20vw;
    height: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: all 1s ease;
    z-index: 999;
    overflow: hidden;
    
    @media (max-width: 1080px) {
      width: 200px;
      height: 200px;
      transform: scale(1) !important;
    }
    
    ::before{
        //animation: borderInBottom 2s ease;
        transition: all 500ms ease;
        --webkit-transition: all 500ms ease;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
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
`

export default Frame;