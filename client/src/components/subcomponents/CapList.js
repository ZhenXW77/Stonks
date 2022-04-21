import React, { Component } from 'react';
import '../../css/ListAndChart.css';
import doQuery from '../Query';
import Graph1 from '../GraphChart.js/Graph1';

export default class CapList extends Component {
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
                <button className = "queryButton" onClick = {() => {this.graphData = doQuery("range", this.state.ticker)}}> Range </button>
                <button className = "queryButton" onClick = {() =>{this.graphData = doQuery("movingavg", this.state.ticker, this.state.extradata)}}> 90 day Moving Average </button>
                <button className = "queryButton" onClick = {() =>{this.graphData = doQuery("change", this.state.ticker)}}> Percentage Change </button>
                <button className = "queryButton" onClick = {() => {this.graphData = doQuery("roc", this.state.ticker)}}> Rate of Change </button>
                <button className = "queryButton" onClick = {() => {this.graphData = doQuery("percentcomp", this.state.ticker, this.state.extraData)}}> Compare to other </button>
                <input className = "textBox" placeholder = "Enter Extra Data"></input>
            </div> 

            <div className = "chartListContainer">
                <Graph1 data = {this.graphData}/>
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