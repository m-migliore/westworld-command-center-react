import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {

  selectOptions = () => {
    return this.props.areas.map(area => {
      return {
        key: area.name,
        text: area.name,
        value: area.name
      }
    })
  }

  createName = () => {
    let name = this.props.selectedHost.firstName
    if (this.props.selectedHost.lastName !== "n/a") name += ` ${this.props.selectedHost.lastName}`
    return name
  }

  handleChange = (e, {value}) => {
    this.props.changeLocation(value)
  }

  toggle = () => {
    console.log("The radio button fired")
    this.props.changeActive()
  }

  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.selectedHost.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.createName()} | { this.props.selectedHost.gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.selectedHost.active ? "Active" : "Decommissioned"}
                  checked={this.props.selectedHost.active ? true : false}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.selectedHost.area}
                options={this.selectOptions()}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
