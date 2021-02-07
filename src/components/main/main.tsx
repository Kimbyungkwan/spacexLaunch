import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Header from '../header/header';
import Contents from '../section/contents';
import { useStores } from '../../stores/context';
import {observer} from 'mobx-react';

const Main: React.FC=() =>{
    
    return (
        <>
            <Header/>
             <Contents/>
        </>
    )
}

export default observer(Main)

const Wrap=styled.div`
`