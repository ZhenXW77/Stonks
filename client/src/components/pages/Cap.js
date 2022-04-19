import React, { Component } from 'react';
import DashNavbar from '../subcomponents/DashNavbar';
import CapList from '../subcomponents/CapList';

export default class Cap extends Component {
  render() {
    return (
      <div>
      <DashNavbar/>
      <CapList/>
    </div>
    )
  }
}
