import React, { Component } from 'react';
import { render } from 'react-dom';
import Users from './users.jsx'

export default class Master extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
       <div>
          <Users />
       </div>
    )
  }
}
