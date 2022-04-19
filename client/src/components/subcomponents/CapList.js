import React, { Component } from 'react';
import '../../css/List.css';
//import '../../../Example.js';

export default class CapList extends Component {
    render(){
    return (
        <div>
            <div className="list">
                <button className = "listButton" onClick = ""> VB </button>
                <button className = "listButton" onClick = ""> VO </button>
                <button className = "listButton" onClick = ""> VV </button>
            </div>     
        </div>
    )
  }
}