import React, { Component } from 'react';
import '../../css/ListAndChart.css';
import '../../css/QueryButton.css';
import LineGraph1 from '../GraphChart.js/LineGraph1.js';
import LineGraph2 from '../GraphChart.js/LineGraph2.js';

export default class SectorList extends Component {
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
                <LineGraph1> </LineGraph1>
                <LineGraph2> </LineGraph2>

                <div className="list">
                    <button className = "listButton" onClick = {() => this.changeStock("VanEck Vectors Biotech ETF", "BBH")}> BBH </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares US Aerospace & Defense ETF", "ITA")}> ITA </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares US Real Estate ETF", "IYR")}> IYR </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares US Transportation ETF", "IYT")}> IYT </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares US Telecommunications ETF", "IYZ")}> IYZ </button>
                    <button className = "listButton" onClick = {() => this.changeStock("SPDR S&P Bank ETF", "KBE")}> KBE </button>
                    <button className = "listButton" onClick = {() => this.changeStock("SPDR S&P Insurance ETF", "KIE")}> KIE </button>
                    <button className = "listButton" onClick = {() => this.changeStock("VanEck Vectors Pharmaceutical ETF", "PPH")}> PPH </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares Semiconductor ETF", "SOXX")}> SOXX </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Communication Services Select Sector SPDR Fund", "XLC")}> XLC </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Energy Select Sector SPDR Fund", "XLE")}> XLE </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Financial Select Sector SPDR Fund", "XLF")}> XLF </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Industrial Select Sector SPDR Fund", "XLI")}> XLI </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Technology Select Sector SPDR Fund", "XLK")}> XLK </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Consumer Staples Select Sector SPDR Fund", "XLP")}> XLP </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Utilities Select Sector SPDR Fund", "XLU")}> XLU </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Health Care Select Sector SPDR Fund", "XLV")}> XLV </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Consumer Discretionary Select Sector SPDR Fund", "XLY")}> XLY </button>
                </div>
            </div>
        </div>
    )
  }
}