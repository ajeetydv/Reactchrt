import React, {  } from "react";
import { PieChart, Line, Pie, Sector, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
 
 
  { name: 'Small', value: 21 },
  { name: 'Medium', value: 64 },
  { name: 'Large', value: 15 }
 
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


const Peepad = ()=> {
    
    return (
      <div>
       
      <ResponsiveContainer className="wstperct" width="100%" height="100%">
      
      <PieChart>
        <Pie
          data={data}
          cx={"50%"}
          cy={80}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
        <Sector/>
         <Legend />
         <Tooltip/>
         <Line/>
      </PieChart>
    </ResponsiveContainer>
    </div>
    );
  
}

export default Peepad;