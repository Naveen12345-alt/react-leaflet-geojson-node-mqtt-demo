import React from 'react'
import {subscribe} from 'react-mqtt-client'

const MessageList = props => {
  return (
    <React.Fragment>
      {props.data.reverse().map((d, i) => (
        <p>{`${JSON.stringify(d, null, 4)}`}</p>
      ))}
    </React.Fragment>
  )
}

const Connected = subscribe({topic: 'testtopic/#'})(MessageList)

export default Connected
