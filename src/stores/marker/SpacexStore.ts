import { observable, action, makeObservable, computed } from 'mobx';
import axios from 'axios';
import RootStore from '../rootStrore';

type RocketName = {
	rocket_id: string;
	rocket_name: string;
	rocket_type: string;
};
type RocketImg = {
	mission_patch: string;
};
export type Flight = {
	flight_number: number;
	mission_name: string;
	launch_year: string;
	rocket: RocketName;
	launch_success: boolean;
	links: RocketImg;
	details: string;
};

type AllState = {
	state: 'all';
};

type ToggleState = {
	state: 'toggle';
};

export type State = 'all' | 'toggle';

class SpacexStore {
	constructor(root: RootStore) {
		this.rootStore = root;
		makeObservable(this);
	}

	rootStore: RootStore;

	@observable
	State: State = 'all';

	@observable
	flightList: Flight[] = [];

	@observable
	LaunchSuccessList: any[] = [];

	@observable
	_yearList: string[] = [];

	@computed
	get yearList() {
		return this._yearList;
	}

	@action
	getFlight = async () => {
		try {
			const res = await axios.get('https://api.spacexdata.com/v3/launches?limit=50').then((res) =>
				res.data.map((item: any) => {
					const { flight_number, mission_name, launch_year, rocket, launch_success, links, details } = item;
					return {
						flight_number,
						mission_name,
						launch_year,
						rocket,
						launch_success,
						links,
						details,
					};
				})
			);
			this.flightList = await res;
		} catch (e) {
			throw new Error('not');
		}
	};

	@action
	launchToggle = (bool: boolean) => {
		if (bool) {
			this.State = 'toggle';
			if (this.LaunchSuccessList.length === 0) {
				this.LaunchSuccessList = this.flightList.filter((item) => item.launch_success === bool);
			}
		} else {
			this.State = 'all';
		}
	};

	@action
	getYearList = async () => {
		const list: any = [];
		const res = await axios.get('https://api.spacexdata.com/v3/launches?limit=50').then((res) =>
			res.data.filter((item: any) => {
				if (list.indexOf(item.launch_year) === -1) {
					list.push(item.launch_year);
				}
			})
		);
		this._yearList = list;
	};
}

export default SpacexStore;
