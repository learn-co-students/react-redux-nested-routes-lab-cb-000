import React from 'react';
import { connect } from 'react-redux';

const PetsShow = ({ pet }) =>
  <div className="col-md-8">
    <h2>{pet.name}</h2>
    <p>{pet.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  var pet = state.pets.filter(pet => pet.id === ownProps.match.params.petId)[0] ;
  if (!!pet) {return {pet} }
  else{
    return
    { pet: {} };
  }
};

export default connect(mapStateToProps)(PetsShow);
