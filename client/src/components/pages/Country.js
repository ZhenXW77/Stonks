import React, { Component } from 'react'
import DashNavbar from '../subcomponents/DashNavbar';
import CountryList from '../subcomponents/CountryList';

export default class Country extends Component {
  render() {
    return (
      <div>
        <DashNavbar/>
        <CountryList/>
      </div>
    )
  }
}
