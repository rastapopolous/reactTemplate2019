import React, { Component } from 'react';;
import {} from 'prop-types';

export default class StatefulComponent extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render () {
    return (
      <div className='stateful-container'>
        <span> 
          Hello from Main!
        </span>
      </div>
    );
  }
}
