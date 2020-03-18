import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { fetchCharacter } from '../actions/index';
import styled from 'styled-components';

const GOTstyledDiv = styled.div`
  background-color: #798487;
  font-family: 'MedievalSharp', cursive;
  font-size: 1.4rem;
  width: 100%;
  height: 310px;
  padding: 1%;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #34455B;
  border: 10px solid #AD8941;
  border-radius: 25px;
  &:hover {
      color: #974449;
  }
  @media(max-width: 400px) {
      width: 88%;
      margin-left: 10px;
      font-size: 1.2rem;
  }
`

const Character = props => {
    return (
        <div className='character-contain'>
            <button className='btn' onClick={props.fetchCharacter}>Get Characters</button>
            {props.character && !props.isLoading}
            {props.isLoading &&
            (
                <Loader
                type="ThreeDots"
                color="#1f6032"
                height={100}
                width={100}
                timeout={3000}
              />
            )}
            {props.character.map(character => {
                return (
                    <GOTstyledDiv>
                    <div>
                        <h2>Name: {character.name}</h2>
                        <h2>Gender: {character.gender}</h2>
                        <h2>Culture: {character.culture}</h2>
                        <h2>Alias: {character.aliases}</h2>
                    </div>
                    </GOTstyledDiv>
                )
            })}
        </div>
  );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        character: state.character,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchCharacter }
)(Character);