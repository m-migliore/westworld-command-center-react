import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {

  updatedOptions = () => {
    return this.props.areas.map(area => {
      return {
        key: area.name,
        text: area.name,
        value: area.name
      }
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
   if (prevState.value !== nextProps.selectedHost.area) {
     return {
       value: nextProps.selectedHost.area
     };
   }
 }

  state = {
    // options: [{key: "some_area" text: "Some Area" value: "some_area"}, {key: "another_area" text: "Another Area" value: "another_area"}],
    // options: [],
    // value: null

    options: this.updatedOptions(),
    value: this.props.selectedHost.area

    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  }



  createName = () => {
    let name = this.props.selectedHost.firstName
    if (this.props.selectedHost.lastName !== "n/a") name += ` ${this.props.selectedHost.lastName}`
    return name
  }

  handleChange = (e, {value}) => {
    console.log(e.target)
    this.setState({ value }, this.changeLocationCallback)


    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  changeLocationCallback = () => {
    this.props.changeLocation(this.state.value)
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
                value={this.state.value}
                options={this.state.options}
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
