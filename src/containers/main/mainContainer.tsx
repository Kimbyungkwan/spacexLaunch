import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SpacexStore from '../../stores/marker/SpacexStore';
import Contents from '../../components/section/contents';
import Toggle from '../../components/toggle/toggle';

interface Props {
	spacexStore?: SpacexStore;
}

@inject('spacexStore')
@observer
class MainContainer extends React.Component<Props> {
	private spacexStore = this.props.spacexStore as SpacexStore;

	async componentDidMount() {
		await this.spacexStore.getFlight();
		await this.spacexStore.getYearList();
	}

	handleToggle = (bool: boolean) => {
		this.spacexStore.launchToggle(bool);
	};
	render() {
		const { flightList, State, LaunchSuccessList, yearList } = this.spacexStore;
		console.log(yearList);
		return (
			<>
				<Toggle handleToggle={this.handleToggle} />
				<Contents flightList={flightList} state={State} LaunchSuccessList={LaunchSuccessList} />
			</>
		);
	}
}

export default MainContainer;
