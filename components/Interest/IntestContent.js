import styled from 'styled-components'

const InterestContent = styled.div`
    display: flex; 
    width: 80%;
    height: 80%;
    flex-direction: column;
    @media (max-width: 1080px) {
        width: 100vw;
        height: 100%;
        align-items: center;
        > div:last-child{
            flex-direction: column-reverse;
            justify-content: space-evenly !important;
            height: 100% !important;
            margin-left: 0 !important;
        }
        > div:first-child{
            margin: 5vh 0;
            text-align: center;
        }
        div:last-child > div:last-child > div:last-child {
            width: 300px;
        }
        div:last-child > h1{
            font-size: 24px;
            width: 90vw;
            text-align: justify;
        }
    }
    .KnowledgeTree{
        svg{
            max-width: 100%;
            max-height: 100%;
        }
        .logo {
            transform-box: fill-box;
            transform-origin: center;
            animation: opacity;
            animation: zoomIn;
            animation-duration: 1s;
            transition: all ease 200ms;
            :hover{
                transform: scale(1.1);
                transition: all ease 200ms;
            }
        }
        #Line1, #Line2, #Line3, #Line4, #Line5, #Line6, #Line7, #Line8, #Line9, #Line10, #Line11, #Line12, #Line13, #Line14, #Line15, #Line16, #Line17, #Line18 {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: lineAnimation 5s linear forwards;
        }
        #Line1{
            animation-delay: 0.6s;
        }
        #Line2{
            animation-delay: 0.8s;
        }
        #Line3{
            animation-delay: 1s;
        }
        #Line4{
            animation-delay: 1.2s;
        }
        #Line5{
            animation-delay: 1.4s;
        }
        #Line6{
            animation-delay: 1.6s;
        }
        #Line7{
            animation-delay: 1.8s;
        }
        #Line8{
            animation-delay: 2s;
        }
        #Line9{
            animation-delay: 2.1s;
        }
        #Line10{
          animation-delay: 2.2s;
        }
        #Line11{
          animation-delay: 2.3s;
        }
        #Line12{
          animation-delay: 2.4s;
        }
        #Line13{
          animation-delay: 2.5s;
        }
        #Line14{
          animation-delay: 2.6s;
        }
        #Line15{
          animation-delay: 2.7s;
        }
        #Line16{
          animation-delay: 2.8s;
        }
        #Line17{
          animation-delay: 2.9s;
        }
        #Line18{
          animation-delay: 3.2s;
        }
    }
    @keyframes lineAnimation {
        to {
            stroke-dashoffset: 0;
        }
    }
   
`

export default InterestContent;