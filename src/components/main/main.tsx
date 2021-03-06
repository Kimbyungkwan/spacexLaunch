import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import Contents from '../section/contents';
import { useStores } from '../../stores/context';
import { observer } from 'mobx-react';
import Toggle from '../toggle/toggle';
import MainContainer from '../../containers/main/mainContainer';

const Main: React.FC = () => {
	return (
		<>
			<Header />
			<MainContainer />
		</>
	);
};

export default Main;

const Wrap = styled.div``;
