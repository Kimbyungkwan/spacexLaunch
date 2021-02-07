import React from 'react';
import styled from 'styled-components';


const Header = ()=> {
    return (
        <Wrap>
            <TiTle>
                SPACE <span>X</span>
            </TiTle>
            <SubTiTle>
                SpaceX. Launch Program Search
            </SubTiTle>
        </Wrap>
    )
}

export default Header;


const Wrap = styled.div`
    height:20vh;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const TiTle = styled.h1`
    font-size:4rem;
    & > span{
        font-weight:600;
        color:red;
    }
`;

const SubTiTle = styled.h5`
    font-size:1rem;
`;