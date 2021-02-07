import React from 'react'
import styled from 'styled-components'
import { useStores } from '../../stores/context';
import {State} from '../../stores/marker/SpacexStore'
import {observer} from 'mobx-react'

const Contents: React.FC = ()=> {
    const {spacexStore} = useStores();

    return (
        <Wrap>
            {  
                spacexStore.State === 'all'
                ? spacexStore.flightList.map((item,i)=>(
                    <div key={i}>
                        <img src={item.links.mission_patch} alt={item.mission_name +'_'+ item.launch_year}/>
                        <p>{item.flight_number}</p>
                        <p>{item.mission_name}</p>
                        <p>{item.launch_year}</p>
                        {/* <p>{item.details}</p> */}
                        <p>{item.launch_success ? 'true' : 'false'}</p>
                        <p>{item.rocket.rocket_name}</p>
                        <p>{item.rocket.rocket_type}</p>
                        
                    </div>
                ))
                : spacexStore.State === 'toggle'
                    ? spacexStore.LaunchSuccessList.map((item,i)=>(
                        <div key={i}>
                            <img src={item.links.mission_patch} alt={item.mission_name +'_'+ item.launch_year}/>
                            <p>{item.flight_number}</p>
                            <p>{item.mission_name}</p>
                            <p>{item.launch_year}</p>
                            {/* <p>{item.details}</p> */}
                            <p>{item.launch_success ? 'true' : 'false'}</p>
                            <p>{item.rocket.rocket_name}</p>
                            <p>{item.rocket.rocket_type}</p>
                            
                        </div>
                    ))
                    : '뭥'
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
    padding:20px;
    
    & > div{
        width:calc(200px - 1rem);
        display:flex;
        flex-direction:column;
        margin-bottom:1rem;
        margin-right:1rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        
        &>p{
            margin-bottom:0.3rem;
        }
    }
`
