import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { fetchCharacter } from '../actions/index';

const Character = props => {
    return (
        <div className='character-contain'>
            <button className='btn' onClick={props.fetchCharacter}>Get Character</button>
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
                    <div>
                        <h2>Name: {character.name}</h2>
                        <h2>Gender: {character.gender}</h2>
                        <h2>Culture: {character.culture}</h2>
                        <h2>Status: {character.status}</h2>
                    </div>
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