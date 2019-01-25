import React, { Component } from 'react'
import {} from 'prop-types'

export default class StatefulLayout extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render () {
    return (
      <div className=''>
        {/*}
         <div>
           {arr.map(el => {
              return (
                <ChildComponent
                  key={el.something}
                  user={user} />
              )
            })}
          </div>
          */}
        <span>
          Hello from Main!
        </span>
      </div>
    )
  }
}
