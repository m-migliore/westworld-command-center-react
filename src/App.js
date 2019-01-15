import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from "./components/WestworldMap"
import Headquarters from "./components/Headquarters"


class App extends Component {
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  state = {
    hosts: [],
    areas: [],
    selectedHost: null
  }

  componentDidMount() {
    fetch("http://localhost:4000/hosts")
    .then(r => r.json())
    .then(data => {
      this.setState({
        hosts: data
      })
    })

    fetch("http://localhost:4000/areas")
    .then(r => r.json())
    .then(data => {
      this.setState({
        areas: data
      })
    })
  }

  selectHost = (selectedHost) => {
    console.log(selectedHost)
    const foundHost = this.state.hosts.find(host => host.id === selectedHost.id)
    this.setState({
      selectedHost: foundHost
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas}/>
        <Headquarters
          hosts={this.state.hosts}
          selectHost={this.selectHost}
          selectedHost={this.state.selectedHost}
        />
      </Segment>
    )
  }
}

export default App;
