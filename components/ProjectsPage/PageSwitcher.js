import styled from 'styled-components'

const PageSwitcher = styled.div`
    position: absolute;
    cursor: pointer;
    right: ${props => props.Right};
    left: ${props => props.Left};

    #switcher{
        stroke: ${props => props.Color};
        transition: all 1s;
    }

    @media (max-width: 1080px) {
        right: ${props => props.RightMobile};
        left: ${props => props.LeftMobile};
        position: fixed;
        top: 50%;
        margin-bottom: -50px;
        svg{
            width: 25px !important;
            height: 25px !important;
        }
        path{
            fill: ${props => props.Color};
        }
    }
    @keyframes lineAnimation {
        to {
            stroke-dashoffset: 0;
        }
    }
`

export default PageSwitcher;