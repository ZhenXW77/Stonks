import React, { Component } from 'react';
import '../../css/List.css';
//import '../../../Example.js';

export default class CommodityList extends Component {
    render(){
    return (
        <div>
            <div className="list">
                <button className = "listButton" onClick = ""> GLD </button>
                <button className = "listButton" onClick = ""> SLV </button>
            </div>     
        </div>
    )
  }
}