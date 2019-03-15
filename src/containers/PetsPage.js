import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';


class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    return (
      <div>
        <div>Pets Page</div>
          <ul>
            {this.props.pets.map (function(pet){
              return(
                <Link to={`/pets/${pet.id}`} >
                  <li>
                    Name: {pet.name} ; Description: {pet.description}
                  </li>
                </Link>
              )
            })}
          </ul>
      </div>
    )
  }

};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
