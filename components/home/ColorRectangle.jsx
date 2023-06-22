import { keyframes } from 'styled-components';
import styled from 'styled-components'
import React, { useState } from 'react';

const ColorRectangleDiv = styled.div`
    position: absolute;
    right: 5vw;
    top: 5vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    @media (max-width: 760px) { 
      display: none;
    }
    @media (max-width: 1450px) { 
        right: 0;
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-50px);
    }
`;

const Rectangle = styled.div`
    width: 5vh;
    height: 5vh;
    cursor: pointer;
    box-shadow: ${props => props.isSelected ? 'inset 0 0 0 3px #fff' : 'none'};
    background-color: ${props => props.backgroundColor};
    display: ${props => props.display};
    opacity: ${props => (props.isVisible ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    animation: ${props => (props.isVisible ? fadeIn : fadeOut)} 0.5s ease-in-out;
    animation-delay: ${props => props.delay};
    transition-delay: ${props => props.delay};
`;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function ColorRectangle({ selectedColor, setSelectedColor, listOfColors }) {
    const [isListOfColorsVisible, setIsListOfColorsVisible] = useState(false);
    const [display, setDisplay] = useState('none');

    const handleMouseEnter = async () => {
        if (!isListOfColorsVisible) {
            setDisplay('block')
            await sleep(500);
            setIsListOfColorsVisible(true);
        }
    };

    const handleMouseLeave = async () => {
        if(isListOfColorsVisible) {
            console.log('out')
            setIsListOfColorsVisible(false);
            await sleep(3000);
            setDisplay('none');
        }
    };

    return (
        <ColorRectangleDiv onMouseLeave={handleMouseLeave} onMouseOver={() => handleMouseEnter()}>
            <Rectangle
                isVisible={true}
                display={'block'}
                isSelected={selectedColor === listOfColors[0]}
                backgroundColor={listOfColors[0]}
                onClick={() => setSelectedColor(listOfColors[0])}
            />
            {listOfColors.slice(1).map((color, index) => (
                <Rectangle
                    key={index}
                    isVisible={isListOfColorsVisible}
                    display={display}
                    isSelected={selectedColor === listOfColors[index + 1]}
                    backgroundColor={color}
                    onClick={() => setSelectedColor(listOfColors[index + 1])}
                    delay={`${(index + 1)/2}s`}
                />
            ))}
        </ColorRectangleDiv>
    );
}
