import React, {Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Data2 from './Data2.json'

function LineGraph2(){
  const data = Data2;
  
    return (
        <div className = "chart2">
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
            <Line type="monotone" dataKey="Percentage Change" stroke="#010203" activeDot={{ r: 8 }}/>
            <Line type="monotone" dataKey="Compare to other" stroke="#82ca9d" />
            </LineChart> 
        </div>
    )
}

export default LineGraph2;