import React, { Component } from 'react';
import '../../css/ListAndChart.css';
import '../../css/QueryButton.css';
import LineGraph from '../GraphChart.js/LineGraph1.js';

export default class CommodityList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stock: 'Choose a Stock',
            ticker: 'Nan',
            compare: 'Nan',
            day: 0
        }
    }

    changeStock(text, ticker){
        this.setState({
            stock: text,
            tickerKey: ticker 
        })
    }

    getInput(){

        const val = document.querySelector('input').value;
        this.setState({
            compare: val
        })
    }

    getInputDay(){

        const val = document.querySelector('input').value;
        this.setState({
            day: val
        })
    }

    render(){
    return (
        <div>
            <h1 className = "stockName">{this.state.stock} ({this.state.tickerKey}) ({this.state.compare}) ({this.state.day})</h1> 
            
            <div className = "queryGroup">
                <button className = "queryButton" onClick = ""> Range </button>
                <button className = "queryButton" onClick = {() => this.getInputDay()}> Moving Average </button>
                <input id = "1" className = "textBox" placeholder = "Enter ticker"></input>
                <button className = "queryButton" onClick = ""> Percentage Change </button>
                <button className = "queryButton" onClick = ""> Rate of Change </button>
                <button className = "queryButton" onClick = {() => this.getInput()}> Compare to other </button>
                <input id = "2" className = "textBox" placeholder = "Enter ticker"></input>
            </div> 

            <div className = "chartListContainer">
                <LineGraph className = "chart"> </LineGraph>

                <div className="list">
                    <button className = "listButton" onClick = {() => this.changeStock("SPDR Gold Trust", "GLD")}> GLD </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares Silver Trust", "SLV")}> SLV </button>
                </div>     
            </div> 
        </div>
    )
  }
}