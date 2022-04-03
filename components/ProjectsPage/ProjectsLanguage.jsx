import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components'

const options = [
  { value: 'pt', label: '🇧🇷' },
  { value: 'en', label: '🇺🇸' },
];

const DivProjectsLanguage = styled.div`
    position: absolute;
    bottom: 30px;
    right: 100px;

    @media (max-width: 730px) { 
        top: 11vh;
        right: 75vw;
    }
`

export default function ProjectsLanguage({ selectedOption, setSelectedOption}){
    return(
        <DivProjectsLanguage>
            <div className="App">
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    menuPlacement={'top'}
                />
            </div>
        </DivProjectsLanguage>
    )
}