import React, { Component } from 'react';;
import {} from 'prop-types';
import './stateful.css';
import './stayedfull.scss'

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
