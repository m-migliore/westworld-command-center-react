import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import ColdStorage from "./ColdStorage"
import Details from "./Details"
// import LogPanel from "./LogPanel"



class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <ColdStorage
            hosts={this.props.hosts}
            selectHost={this.props.selectHost}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Details selectedHost={this.props.selectedHost}/>
        </Grid.Column>
        <Grid.Column width={3}>

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
