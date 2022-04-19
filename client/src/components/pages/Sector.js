import React, { Component } from 'react';
import DashNavbar from '../subcomponents/DashNavbar';
import SectorList from '../subcomponents/SectorList';

export default class Sector extends Component {
  render() {
    return (
      <div>
        <DashNavbar/> 
        <SectorList/>
      </div>
    )
  }
}
