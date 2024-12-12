import React, {  } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const datapp = [
  { name: "Battery Disposal", value: 31.31 },
  { name: "Desktop Recycling", value: 37.05 },
  { name: "Laptop Recycling", value: 35.67 },
  { name: "Miscellaneous", value: 42.58 },
  { name: "Mobile Phone Recycling", value: 41.48 },
  { name: "Printer Recycling", value: 39.25 },
  { name: "TV Recycling", value: 28.13 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PPChart = ()=> {
    
      return (
        <div>
         
        <ResponsiveContainer className="ppchj" width="100%" height="100%">
        
        <PieChart width="100%" height="100%">
      <Pie
        data={datapp}
        cx={"50%"}
        cy={"50%"}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {datapp.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
      </ResponsiveContainer>
      </div>
      );
    
  }

  export default PPChart;