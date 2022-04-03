import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components'

const options = [
  { value: 'pt', label: '🇧🇷' },
  { value: 'en', label: '🇺🇸' },
];

const DivHomeLanguage = styled.div`
    position: absolute;
    bottom: 30px;
    right: 100px;

    @media (max-width: 730px) { 
        top: 20px;
        right: 20px;
    }
`

export default function HomeLanguage({ selectedOption, setSelectedOption}){
    return(
        <DivHomeLanguage>
            <div className="App">
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    menuPlacement={'top'}
                />
            </div>
        </DivHomeLanguage>
    )
}