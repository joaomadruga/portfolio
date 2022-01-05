import styled from 'styled-components'

const BorderProjecttPage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    @media (max-width: 1080px) { 
      max-width: 100%;
      height: 100%;
    }
    
    ::before{
        //animation: borderInTop 2s ease;
        transition: all 500ms ease;
        --webkit-transition: all 500ms ease;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-top: 3px solid ${props => props.color};
        box-sizing: border-box;
    }
    
    ::after{
      //animation: borderInLeft 2s ease;
      transition: all 500ms ease;
      --webkit-transition: all 500ms ease;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-left: 3px solid ${props => props.color};
      box-sizing: border-box;
    }
    

    @keyframes borderInTop{
      0%{
        left: 100%;
        width: 0;
      }
      100%{
        left: 0;
        width: 100%;
       
      }
    }
    @keyframes borderInLeft{
      0%{
        top: 100%;
        height: 0;
      }
      100%{
        top: 0;
        height: 100%;
       
      }
    }

    @keyframes hideBorderInTop{
      0%{
        left: 0;
        width: 100%;
       
      }
      100%{
        left: 100%;
        width: 0;
      }
    }
    @keyframes hideBorderInLeft{
      0%{
        top: 0;
        height: 100%;
       
      }
      100%{
        top: 100%;
        height: 0;
      }
    }
`

export default BorderProjecttPage;