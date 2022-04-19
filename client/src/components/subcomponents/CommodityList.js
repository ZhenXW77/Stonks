import React, { Component } from 'react';
import '../../css/List.css';
//import '../../../Example.js';

export default class CommodityList extends Component {
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
                <button className = "listButton" onClick = {() => this.changeStock("SPDR Gold Trust")}> GLD </button>
                <button className = "listButton" onClick = {() => this.changeStock("iShares Silver Trust")}> SLV </button>
            </div>     
        </div>
    )
  }
}