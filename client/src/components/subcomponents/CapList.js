import React, { Component } from 'react';
import '../../css/ListAndChart.css';
import '../../css/QueryButton.css';
import LineGraph from '../GraphChart.js/LineGraph1.js';

export default class CapList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stock: 'Choose a Stock',
            ticker: 'Nan'
        }
    }

    changeStock(text, ticker){
        this.setState({
            stock: text,
            tickerKey: ticker 
        })
    }

    render(){
    return (
        <div>
            <h1 className = "stockName">{this.state.stock} ({this.state.tickerKey})</h1>  

            <div className = "queryGroup">
                <button className = "queryButton" onClick = ""> Range </button>
                <button className = "queryButton" onClick = ""> 90 day Moving Average </button>
                <button className = "queryButton" onClick = ""> Percentage Change </button>
                <button className = "queryButton" onClick = ""> Rate of Change </button>
                <button className = "queryButton" onClick = ""> Compare to other </button>
            </div> 

            <div className = "chartListContainer">
                <LineGraph className = "chart"> </LineGraph>

                <div className="list">
                    <button className = "listButton" onClick = {() => this.changeStock("Vanguard Small-Cap Index Fund ETF", "VB")}> VB </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Vanguard Mid-Cap Index Fund ETF", "VO")}> VO </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Vanguard Large-Cap Index Fund ETF", "VV")}> VV </button>
                </div>    
            </div>  
        </div>
    )
  }
}