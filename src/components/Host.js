import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  const handleClick = () => {
    props.selectHost(props.host)
  }

  return(
    <Card
      className={props.host.selected ? "host selected" : "host"}
      onClick={handleClick}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
