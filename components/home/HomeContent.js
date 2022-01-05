import styled from 'styled-components'

const HomeContent = styled.div`
    background-color: #000;
    .scrollTriangle{
        cursor: pointer;
        animation: slideInUp 1s, scrollTriangleAnimation 1s infinite alternate ease;
    }
    @keyframes scrollTriangleAnimation {
            0% {
                transform: translateY(-20px);
            }
            100% {
                transform: translateY(0);
            }
        }
    .showSocialMedia{
        position: absolute;
        width: 200px;
        left: 0;
        top: 12%;
        margin-left: 35px;
        height: 100px;
        animation: fadeIn 1s;
    }
    .fadeOutSocialMedia{
        position: absolute;
        width: 200px;
        left: 0;
        top: 12%;
        margin-left: 35px;
        height: 100px;
        animation: fadeOut 2s;
    }
    .noDisplay{
        display: none;
    }
    .invisibleDisplay{
        transition: all 1s;
        opacity: 0;
    }
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

    @media (max-width: 1080px) {
        width: 100vw;
    }
`

export default HomeContent;