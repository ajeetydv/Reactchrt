import React, {  } from "react";
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
   
  } from "recharts";
  
  const data = [
    {
      name: "Battery Disposal",
      "Energy Conserved (kWh)": 397.6,
    },
    {
      name: "Desktop Recycling",
      "Energy Conserved (kWh)": 172.01,
    },
    {
      name: "Laptop Recycling",
      "Energy Conserved (kWh)": 520.2,
    },
    {
      name: "Miscellaneous",
      "Energy Conserved (kWh)": 635.82,
    },
    {
      name: "Mobile Phone Recycling",
      "Energy Conserved (kWh)": 326.36,
    },
    {
      name: "Printer Recycling",
     "Energy Conserved (kWh)": 1008.59,
      
    },

    {
     name: "TV Recycling",
 	"Energy Conserved (kWh)": 167.99,
     
      }
  ];
  

  const Energycoserve = ()=> {
        return (
          <div>
  
  <ResponsiveContainer className="enecosv">
  <ComposedChart
      layout="vertical"
      
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 10,
        left: 30,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number"  tick={{fontSize: 15, color: "red"}} />
      <YAxis dataKey="name" type="category" scale="band" tick={{fontSize: 12, color: "red"}} />
      <Tooltip />
      <Legend />

      <Bar dataKey="Energy Conserved (kWh)" barSize={20} fill="#413ea0" />
    </ComposedChart>
      </ResponsiveContainer>
  
          </div>
        );
    }
    
    export default Energycoserve;