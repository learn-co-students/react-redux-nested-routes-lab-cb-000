import React from 'react';
import { connect } from 'react-redux';

const PetsShow = ({ pet }) =>
  <div className="col-md-8">
    <h2>{pet.name}</h2>
    <p>{pet.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match
  const selectedPet = state.pets.find(x => x.id === params.petId)
  return {
    pet: selectedPet
  };
};

export default connect(mapStateToProps)(PetsShow);
