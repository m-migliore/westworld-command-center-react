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

  changeLocation = (selectedHost, location) => {

    let updatedFoundHost
    const updatedHosts = this.state.hosts.map(host => {
      if (host.id === selectedHost.id) {
        host.area = location
        updatedFoundHost = host
        return host
      } else {
        return host
      }
    })

    this.setState({
      hosts: updatedHosts,
      selectedHost: updatedFoundHost
    })
  }

  changeLocation = (location) => {
    let updatedFoundHost
    const updatedHosts = this.state.hosts.map(host => {
      if (host.id === this.state.selectedHost.id) {
        host.area = location
        updatedFoundHost = host
        return host
      } else {
        return host
      }
    })

    this.setState({
      hosts: updatedHosts,
      selectedHost: updatedFoundHost
    })
  }

  changeActive = () => {
    console.log("changeActive")
    let updatedFoundHost
    const updatedHosts = this.state.hosts.map(host => {
      if (host.id === this.state.selectedHost.id) {
        host.active = !host.active
        updatedFoundHost = host
        return host
      } else {
        return host
      }
    })

    this.setState({
      hosts: updatedHosts,
      selectedHost: updatedFoundHost
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap
          areas={this.state.areas}
          hosts={this.state.hosts}
          selectHost={this.selectHost}
        />
        <Headquarters
          areas={this.state.areas}
          hosts={this.state.hosts}
          selectHost={this.selectHost}
          selectedHost={this.state.selectedHost}
          changeLocation={this.changeLocation}
          changeActive={this.changeActive}
        />
      </Segment>
    )
  }
}

export default App;
