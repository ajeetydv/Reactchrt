import React, {  } from "react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Week1',
    "Number of Job Completed": 20,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Week2',
    "Number of Job Completed": 20,
    
  },
  {
    name: 'Week3',
    "Number of Job Completed": 22,
    
  },
  {
    name: 'Week4',
    "Number of Job Completed": 28,
    
  },
  {
    name: 'Week5',
    "Number of Job Completed": 10,
   
  },
  
];


  
const Weeklyjob = ()=> {
    return (
      <div>
<ResponsiveContainer  className="dpsfss" width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis dataKey="name" />
          <YAxis />
          
          <Area type="monotone" dataKey="Number of Job Completed" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
}

export default Weeklyjob;