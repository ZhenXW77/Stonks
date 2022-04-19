import React, { Component } from 'react'
import DashNavbar from '../subcomponents/DashNavbar';
import CurrencyList from '../subcomponents/CurrencyList';

export default class Currency extends Component {
  render() {
    return (
      <div>
        <DashNavbar/>
        <CurrencyList/>
      </div>
    )
  }
}
