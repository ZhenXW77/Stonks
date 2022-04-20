import React, {Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Data1 from './Data1.json'

function LineGraph1(){
  const data = Data1;
  
    return (
        <div className = "chart">
            <LineChart
                width={1250}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Price" stroke="#010203" activeDot={{ r: 8 }}/>
            <Line type="monotone" dataKey="Moving Average" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Range" stroke="#8884d8" />
            </LineChart> 
        </div>
    )
}

export default LineGraph1;