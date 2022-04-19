import React, { Component } from 'react';
import '../../css/List.css';
import '../../css/QueryButton.css';
//import '../../../Example.js';

export default class CountryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stock: 'Choose a Stock'
        }
    }

    changeStock(text){
        this.setState({
            stock: text
        })
    }

    render(){
    return (
        <div>
            <h1 className = "stockName">{this.state.stock}</h1> 

            <div className = "queryGroup">
                <button className = "queryButton" onClick = ""> Range </button>
                <button className = "queryButton" onClick = ""> 90 day Moving Average </button>
                <button className = "queryButton" onClick = ""> Percentage Change </button>
                <button className = "queryButton" onClick = ""> Rate of Change </button>
                <button className = "queryButton" onClick = ""> Compare to other </button>
            </div> 

            <div className="list">
                <button className = "listButton" onClick = {() => this.changeStock("Global X MSCI Argentina ETF")}> ARGT </button>
                <button className = "listButton" onClick = {() => this.changeStock("ishares Msci Israel ETF")}> EIS </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Australia ETF")}> EWA </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Canada ETF")}> EWC </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Hong Kong ETF")}> EWH </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Japan ETF")}> EWJ </button>
                <button className = "listButton" onClick = {() => this.changeStock("ishares Msci Switzerland ETF")}> EWL </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI France ETF")}> EWQ </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares Msci Singapore ETF")}> EWS </button>
                <button className = "listButton" onClick = {() => this.changeStock("ishares Msci Taiwan ETF")}> EWT </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI United Kingdom ETF")}> EWU </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Mexico ETF")}> EWW </button>
                <button className = "listButton" onClick = {() => this.changeStock("ishares Msci South Korea ETF")}> EWY </button>
                <button className = "listButton" onClick = {() => this.changeStock("ishares Msci Brazil ETF")}> EWZ </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI South Africa ETF")}> EZA </button>
                <button className = "listButton" onClick = {() => this.changeStock("SPDR S&P China ETF")}> GXC </button>
                <button className = "listButton" onClick = {() => this.changeStock("VanEck Indonesia Index ETF")}> IDX </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI Saudi Arabia ETF")}> KSA </button>
                <button className = "listButton" onClick = {() => this.changeStock("Global X MSCI Norway ETF")}> NORW </button>
                <button className = "listButton" onClick = {() => this.changeStock("VanEck Russia ETF")}> RSX </button>
                <button className = "listButton" onClick = {() => this.changeStock("SPDR S&P 500 ETF Trust")}> SPY </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares MSCI UAE ETF")}> UAE </button>
                <button className = "listButton" onClick = {() => this.changeStock("VanEck Vietnam ETF")}> VNM </button>
            </div>     
        </div>
    )
  }
}