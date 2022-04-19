import React, { Component } from 'react';
import '../../css/List.css';
//import '../../../Example.js';

export default class SectorList extends Component {
    render(){
    return (
        <div>
            <div className="list">
                <button className = "listButton" onClick = ""> BBH </button>
                <button className = "listButton" onClick = ""> ITA </button>
                <button className = "listButton" onClick = ""> IYR </button>
                <button className = "listButton" onClick = ""> IYT </button>
                <button className = "listButton" onClick = ""> IYZ </button>
                <button className = "listButton" onClick = ""> KBE </button>
                <button className = "listButton" onClick = ""> KIE </button>
                <button className = "listButton" onClick = ""> PPH </button>
                <button className = "listButton" onClick = ""> SOXX </button>
                <button className = "listButton" onClick = ""> XLC </button>
                <button className = "listButton" onClick = ""> XLE </button>
                <button className = "listButton" onClick = ""> XLF </button>
                <button className = "listButton" onClick = ""> XLI </button>
                <button className = "listButton" onClick = ""> XLK </button>
                <button className = "listButton" onClick = ""> XLP </button>
                <button className = "listButton" onClick = ""> XLU </button>
                <button className = "listButton" onClick = ""> XLV </button>
                <button className = "listButton" onClick = ""> XLY </button>
            </div>     
        </div>
    )
  }
}