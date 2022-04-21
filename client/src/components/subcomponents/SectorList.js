import React, { Component } from 'react';
import '../../css/ListAndChart.css';
import Graph1 from '../GraphChart.js/Graph1';
import doQuery from '../Query';


export default class SectorList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stock: 'Choose a Stock',
            ticker: 'None Selected',
            extradata: null
        }
        this.graphData = null;
    }

    changeStock(text, newTicker){
        this.setState({
            stock: text,
            ticker: newTicker
        })
    }

    getInput(){

        const val = document.querySelector('input').value;
        this.setState({
            extradata: val
        })
        return this.state.extradata;
    }


    render(){
    return (
        <div>
            <h1 className = "stockName">{this.state.stock} ({this.state.ticker})</h1> 
  
            <div className = "queryGroup">
                <button className = "queryButton" onClick = {() => {this.graphData = doQuery("range", this.state.ticker); console.log(this.graphData)}}> Range </button>
                <button className = "queryButton" onClick = {() =>{this.graphData = doQuery("movingavg", this.state.ticker, this.state.extradata)}}> 90 day Moving Average </button>
                <button className = "queryButton" onClick = {() =>{this.graphData = doQuery("change", this.state.ticker)}}> Percentage Change </button>
                <button className = "queryButton" onClick = {() => {this.graphData = doQuery("roc", this.state.ticker)}}> Rate of Change </button>
                <button className = "queryButton" onClick = {() => {this.graphData = doQuery("percentcomp", this.state.ticker, this.state.extraData)}}> Compare to other </button>
                <input className = "textBox" placeholder = "Enter Extra Data"></input>
            </div> 

            <div className = "chartListContainer">
                <Graph1 data = {this.graphData}/>

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