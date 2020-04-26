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
      <div>
        <h1>Pets Page</h1>
        <PetsList pets={this.props.pets} />
        <Switch>
        <Route path="/pets/new" component={PetsNew} />
       <Route path="/pets/:petId" component={PetsShow}/>
       <Route exact path="/pets" render={() => (
         <h3>Please select a Pet from the list.</h3>
       )}/>
        </Switch>
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
