import React, { Component } from 'react'

export default class StatefulLayout extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        Hello from Main!
      </div>
    )
  }
}

// {this.props.children}
//  PropTypes
