import { observable, action, makeObservable } from 'mobx';
import axios from 'axios';
import RootStore from '../rootStrore';

type RocketName={
    rocket_id:string;
    rocket_name:string;
    rocket_type:string;
}
type RocketImg={
    mission_patch:string;
}
export type Flight={
    flight_number:number;
    mission_name:string;
    launch_year:string;
    rocket:RocketName;
    launch_success:boolean;
    links:RocketImg;
    details:string;
}

type AllState={
    state:'all'
}

type ToggleState={
    state:'toggle'
}

export type State= 'all' | 'toggle'

class SpacexStore{
    constructor(root:RootStore){
        this.rootStore = root;
        makeObservable(this)
    }

    rootStore:RootStore;

    @observable
    State:State='all';

    @observable
    flightList:Flight[] =[];

    @observable
    LaunchSuccessList:Flight[] =[];

    @action
    getFlight = async () => {
        try {
            const res = await axios.get('https://api.spacexdata.com/v3/launches?limit=50');
            this.flightList = await res.data;
            console.log(res.data);
        } catch (e) {
            throw new Error('not')
        }
    }

    @action
    launchToggle = (bool:boolean) =>{
        this.State="toggle";
        if(bool){
            if(this.LaunchSuccessList.length === 0){
                this.LaunchSuccessList = this.flightList.filter(item=>item.launch_success === bool);
            }
        }else{
            this.State="all";
        }
    }

}

export default SpacexStore;