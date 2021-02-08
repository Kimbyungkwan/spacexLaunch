import React, { useState } from 'react'
import Switch from "react-switch";
import styled from 'styled-components'
import {observer} from 'mobx-react';
import { useStores } from '../../stores/context';

interface Props{
    handleToggle:(bool:boolean)=>void
}

const Toggle:React.FC<Props> = ({handleToggle}) => {

    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked: React.SetStateAction<boolean>) => {
        handleToggle(!checked);
        setChecked(nextChecked);
    };
    return (
        <div>
            <Launch>
                Launch Success
            </Launch>
            <Switch onChange={handleChange} checked={checked} className="react-switch" 
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}/> 
        </div>
    )
}

export default Toggle

const Launch = styled.h4`
    margin-bottom:0.5rem;
` 