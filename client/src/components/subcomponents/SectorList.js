import React, { Component } from 'react';
import '../../css/List.css';
import BarChart from '../GraphChart.js/BarChart.js'
//import '../../../Example.js';

const Chart = require('react-chartjs-2').Chart;

export default class SectorList extends Component {
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

            <BarChart />

            <div className="list">
                <button className = "listButton" onClick = {() => this.changeStock("VanEck Vectors Biotech ETF")}> BBH </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares US Aerospace & Defense ETF")}> ITA </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares US Real Estate ETF")}> IYR </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares US Transportation ETF")}> IYT </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares US Telecommunications ETF")}> IYZ </button>
                <button className = "listButton" onClick = {() => this.changeStock("SPDR S&P Bank ETF")}> KBE </button>
                <button className = "listButton" onClick = {() => this.changeStock("SPDR S&P Insurance ETF")}> KIE </button>
                <button className = "listButton" onClick = {() => this.changeStock("VanEck Vectors Pharmaceutical ETF")}> PPH </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares Semiconductor ETF")}> SOXX </button>
                <button className = "listButton" onClick = {() => this.changeStock("Communication Services Select Sector SPDR Fund")}> XLC </button>
                <button className = "listButton" onClick = {() => this.changeStock("Energy Select Sector SPDR Fund")}> XLE </button>
                <button className = "listButton" onClick = {() => this.changeStock("Financial Select Sector SPDR Fund")}> XLF </button>
                <button className = "listButton" onClick = {() => this.changeStock("Industrial Select Sector SPDR Fund")}> XLI </button>
                <button className = "listButton" onClick = {() => this.changeStock("Technology Select Sector SPDR Fund")}> XLK </button>
                <button className = "listButton" onClick = {() => this.changeStock("Consumer Staples Select Sector SPDR Fund")}> XLP </button>
                <button className = "listButton" onClick = {() => this.changeStock("Utilities Select Sector SPDR Fund")}> XLU </button>
                <button className = "listButton" onClick = {() => this.changeStock("Health Care Select Sector SPDR Fund")}> XLV </button>
                <button className = "listButton" onClick = {() => this.changeStock("Consumer Discretionary Select Sector SPDR Fund")}> XLY </button>
            </div>     
        </div>
    )
  }
}