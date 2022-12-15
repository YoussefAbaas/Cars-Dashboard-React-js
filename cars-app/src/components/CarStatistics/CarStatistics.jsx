import React from 'react'
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,BarChart,Bar} from "recharts";
import './CarStatistics.scss';
function CarsStatistics(props) {
    return (
        <div id="cars" class="ms-2 p-2">
            <h4 class="ps-2"><strong>Cars</strong> Statistics</h4>
            <div class="d-flex justify-content-between align-items-center mt-2 ms-2">
                <p class="mt-3" style={{fontSize:'14px',color:'#5F6165'}}>20 February 2022</p>
                <div class="btn-group border border-1 rounded-pill">
                    <button type="button" class="btn btn-sm rounded-pill" style={{ 'background-color': '#FF764C' }}>day</button>
                    <button type="button" class="btn btn-sm rounded-pill">week</button>
                    <button type="button" class="btn btn-sm rounded-pill">month</button>
                </div>
            </div>
            <ResponsiveContainer height='70%' width='100%'>
                <LineChart margin={{ top: 0, left: -13, right: 5, bottom: 0 }} data={props.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis dataKey="cars" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="cars" stroke="#FF764C" />
                </LineChart>
            </ResponsiveContainer>


        </div>
    )
}

export default CarsStatistics