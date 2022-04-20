import React, { Component } from 'react';
import '../../css/ListAndChart.css';
import '../../css/QueryButton.css';
import LineGraph from '../GraphChart.js/LineGraph1.js';

export default class CurrencyList extends Component {
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
                    <button className = "listButton" onClick = {() => this.changeStock("WisdomTree Chinese Yuan Strategy Fund", "CYB")}> CYB </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Invesco CurrencyShares Australian Dollar ETF", "FXA")}> FXA </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Invesco CurrencyShares British Pound Strlng ETF", "FXB")}> FXB </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Invesco CurrencyShares Canadian Dollar ETF", "FXC")}> FXC </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Invesco CurrencyShares Euro Trust ETF", "FXE")}> FXE </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Invesco CurrencyShares Swiss Franc Trust ETF", "FXF")}> FXF </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Invesco CurrencyShares Japanese Yen Trust", "FXY")}> FXY </button>
                </div>     
            </div>
        </div>
    )
  }
}