import React, { Component } from 'react';
import '../../css/ListAndChart.css';
import '../../css/QueryButton.css';
import LineGraph from '../GraphChart.js/LineGraph1.js';

export default class CountryList extends Component {
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
                    <button className = "listButton" onClick = {() => this.changeStock("Global X MSCI Argentina ETF", "ARGT")}> ARGT </button>
                    <button className = "listButton" onClick = {() => this.changeStock("ishares Msci Israel ETF", "EIS")}> EIS </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Australia ETF", "EWA")}> EWA </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Canada ETF", "EWC")}> EWC </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Hong Kong ETF", "EWH")}> EWH </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Japan ETF", "EWJ")}> EWJ </button>
                    <button className = "listButton" onClick = {() => this.changeStock("ishares Msci Switzerland ETF", "EWL")}> EWL </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI France ETF", "EWQ")}> EWQ </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares Msci Singapore ETF", "EWS")}> EWS </button>
                    <button className = "listButton" onClick = {() => this.changeStock("ishares Msci Taiwan ETF", "EWT")}> EWT </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI United Kingdom ETF", "EWU")}> EWU </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Mexico ETF", "EWW")}> EWW </button>
                    <button className = "listButton" onClick = {() => this.changeStock("ishares Msci South Korea ETF", "EWY")}> EWY </button>
                    <button className = "listButton" onClick = {() => this.changeStock("ishares Msci Brazil ETF", "EWZ")}> EWZ </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI South Africa ETF", "EZA")}> EZA </button>
                    <button className = "listButton" onClick = {() => this.changeStock("SPDR S&P China ETF", "GXC")}> GXC </button>
                    <button className = "listButton" onClick = {() => this.changeStock("VanEck Indonesia Index ETF", "IDX")}> IDX </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Saudi Arabia ETF", "KSA")}> KSA </button>
                    <button className = "listButton" onClick = {() => this.changeStock("Global X MSCI Norway ETF", "NORW")}> NORW </button>
                    <button className = "listButton" onClick = {() => this.changeStock("VanEck Russia ETF", "RSX")}> RSX </button>
                    <button className = "listButton" onClick = {() => this.changeStock("SPDR S&P 500 ETF Trust", "SPY")}> SPY </button>
                    <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI UAE ETF", "UAE")}> UAE </button>
                    <button className = "listButton" onClick = {() => this.changeStock("VanEck Vietnam ETF", "VNM")}> VNM </button>
                </div>    
            </div> 
        </div>
    )
  }
}