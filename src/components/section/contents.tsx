import React from 'react'
import styled from 'styled-components'
import { useStores } from '../../stores/context';

import {observer} from 'mobx-react'

const Contents: React.FC = ()=> {
    const {spacexStore} = useStores();

    return (
        <Wrap>
            {  
                spacexStore.flightList.map((item,i)=>(
                    <div key={i}>
                        <p>{item.flight_number}</p>
                        <p>{item.mission_name}</p>
                        <p>{item.launch_year}</p>
                        <p>{item.details}</p>
                    </div>
                ))
             }
        </Wrap>
    )
}

export default observer(Contents)

const Wrap = styled.div`
    max-width:1000px;
    width:100%;
    margin:0 auto;
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    & > div{
        width:200px;
        display:flex;
        flex-direction:column;
    }
`
