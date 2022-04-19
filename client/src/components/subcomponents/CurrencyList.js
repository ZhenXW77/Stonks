import React, { Component } from 'react';
import '../../css/List.css';
//import '../../../Example.js';

export default class CurrencyList extends Component {
    render(){
    return (
        <div>
            <div className="list">
                <button className = "listButton" onClick = ""> CYB </button>
                <button className = "listButton" onClick = ""> FXA </button>
                <button className = "listButton" onClick = ""> FXB </button>
                <button className = "listButton" onClick = ""> FXC </button>
                <button className = "listButton" onClick = ""> FXE </button>
                <button className = "listButton" onClick = ""> FXF </button>
                <button className = "listButton" onClick = ""> FXY </button>
            </div>     
        </div>
    )
  }
}