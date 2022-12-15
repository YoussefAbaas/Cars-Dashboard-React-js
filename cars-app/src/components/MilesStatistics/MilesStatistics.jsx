import React from 'react'
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,BarChart,Bar} from "recharts";
import './MilesStatistics.scss';
function MilesStatistics(props) {
    return (
        <div id="miles" class="ms-2 p-2">
            <h4 class="ps-2"><strong>Miles</strong> Statistics</h4>
            <div class="d-flex justify-content-between align-items-center mt-2 ms-2">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-primary rounded-pill me-2">day</button>
                    <button type="button" class="btn btn-sm rounded-pill me-2">week</button>
                    <button type="button" class="btn btn-sm rounded-pill me-2">month</button>
                </div>
                <p class="mt-3" style={{fontSize:'14px',color:'#5F6165'}}>256 Miles</p>
            </div>
            <ResponsiveContainer height='70%' width='100%'>
                <BarChart margin={{ top: 0, left: -13, right: 5, bottom: 0 }} data={props.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis dataKey="miles" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="miles" fill="#F4F5F9" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MilesStatistics;