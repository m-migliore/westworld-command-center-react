import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from "./Host"

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={9}>
      {props.hosts.map(host => {
        return <Host
                key={host.id}
                host={host}
                selectHost={props.selectHost}
              />
      })}
    </Card.Group>
  )
}

export default HostList
