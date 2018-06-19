import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
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
      <div>Pets Page
      <PetsList pets ={this.props.pets} />
      <Route path={`${this.props.match.url}/new`} component={PetsNew} />
      <Route path={`${this.props.match.url}/:petId`} component={PetsShow}/>
      <Route exact path={this.props.match.url} render={ ()=> (
        <h3> Please select a pet from the list </h3>
        )} />

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
