import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../stores/context';
import { Flight, State } from '../../stores/marker/SpacexStore';
import { observer } from 'mobx-react';

interface Props {
	flightList: Flight[];
	state: State;
	LaunchSuccessList: any;
}

const Contents: React.FC<Props> = ({ flightList, state, LaunchSuccessList }) => {
	return (
		<Wrap>
			{state === 'all'
				? flightList.map((item: Flight) => (
						<div key={item.flight_number + item.launch_year}>
							<img src={item.links.mission_patch} alt={item.mission_name + '_' + item.launch_year} />
							<p>{item.flight_number}</p>
							<p>{item.mission_name}</p>
							<p>{item.launch_year}</p>
							{/* <p>{item.details}</p> */}
							<p>{item.launch_success ? 'true' : 'false'}</p>
							<p>{item.rocket.rocket_name}</p>
							<p>{item.rocket.rocket_type}</p>
						</div>
				  ))
				: state === 'toggle'
				? LaunchSuccessList.map((item: Flight) => (
						<div key={item.flight_number + item.launch_year}>
							<img src={item.links.mission_patch} alt={item.mission_name + '_' + item.launch_year} />
							<p>{item.flight_number}</p>
							<p>{item.mission_name}</p>
							<p>{item.launch_year}</p>
							{/* <p>{item.details}</p> */}
							<p>{item.launch_success ? 'true' : 'false'}</p>
							<p>{item.rocket.rocket_name}</p>
							<p>{item.rocket.rocket_type}</p>
						</div>
				  ))
				: '뭥'}
		</Wrap>
	);
};

export default Contents;

const Wrap = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 20px;

	& > div {
		width: calc(200px - 1rem);
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		margin-right: 1rem;
		padding: 0.5rem;
		border: 1px solid #ccc;

		& > p {
			margin-bottom: 0.3rem;
		}
	}
`;
