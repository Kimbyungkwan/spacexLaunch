import SpacexStore from './marker/SpacexStore';

class RootStore {
	spacexStore: SpacexStore;

	constructor() {
		this.spacexStore = new SpacexStore(this);
	}
}

export default RootStore;
