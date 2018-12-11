import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class StatefulLayout extends Component {
  static PropTypes = {}
  static DefaultProps = {}
  state = {}

  render () {
    return (
      <div className=''>
        <div>
          {arr.map(el => {
            return (
              <ChildComponent
                key={el.something}
                user={user} />
            )
          })}
        </div>
        <span>
          Hello from Main!
        </span>
      </div>
    )
  }
}
