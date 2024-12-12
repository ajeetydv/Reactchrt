import React, {  } from "react";
import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
 
  ResponsiveContainer,
} from "recharts";

const data = [
    {
      name: "Week1",
      Small: 24.72,
      Medium: 218.21,
      Large: 107.97,
      
    },
    {
        name: "Week2",
        Small: 40.84,
        Medium: 183.84,
        Large: 165.38,
        
      },
      {
        name: "Week3",
        Small: 43.09,
        Medium: 270.25,
        Large: 57.67,
        
      },
      {
        name: "Week4",
        Small: 43.02,
        Medium: 340.89,
        Large:85.39,
        
      },
      {
        name: "Week5",
        Small: "",
        Medium: 170.94,
        Large: "",
        
      },
    
  ];

  const Wastevolume = ()=> {
      return (
        <div>

<ResponsiveContainer className="wstvlsm" >
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" /> */}
        <YAxis />
        <Tooltip cursor={{fill: '#f1f1f1'}} />
        <Legend />
        <Bar dataKey="Small" stackId="a" fill="#15c457" />
        <Bar dataKey="Medium" stackId="a" fill="#0b7834 " />
        <Bar dataKey="Large" stackId="a" fill="#4bffb9" />
      </BarChart>
    </ResponsiveContainer>

        </div>
      );
  }
  
  export default Wastevolume;