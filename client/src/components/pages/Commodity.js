import React, { Component } from 'react';
import DashNavbar from '../subcomponents/DashNavbar';
import CommodityList from '../subcomponents/CommodityList';

export default class Commodity extends Component {
  render() {
    return (
      <div>
      <DashNavbar/>
      <CommodityList/>
    </div>
    )
  }
}
