import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from "./Area"


const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {props.areas.map(area => {
        return <Area
                key={area.id}
                area={area}
                hosts={props.hosts.filter(host => host.area === area.name && host.active)}
                selectHost={props.selectHost}
                changeLocation={props.changeLocation}
               />
      })}
    </Segment>
  )
}

export default WestworldMap
