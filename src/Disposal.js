import React, {  } from "react";


import { XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer, BarChart, Bar } from 'recharts';

const dataemit = [
    {
      name: '13.69',
      'Disposal Fees': 5,
      cts: 11,
    },
    {
      name: '35.2',
      'Disposal Fees':10,
       cts: 33,
    },
    {
      name: '6.78',
      'Disposal Fees':15,
     cts:44,
    },
    {
      name: '70.43',
      'Disposal Fees':20,
     cts:54,
    },
    {
      name: '17.48',
    'Disposal Fees':25,
     cts:65,
    },
    {
      name: '23',
      'Disposal Fees':30,
     cts:54,
    },
    {
      name: '22.07',
      'Disposal Fees':35,
     cts:52,
    },

    {
        name: '46.45',
        'Disposal Fees':40,
       cts:52,
      },
  ];

  
const Disposal = ()=> {
    return (
      <div>
<ResponsiveContainer className="dpsfss" width="100%" height="100%" interval="preserveStartEnd">
        <BarChart
          width={"0"}
          height={""}
          data={dataemit}
          
          barCategoryGap={"0"}
          barGap={0}
          margin={{
            top: 0,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{fontSize: 10, color: "red"}} 
           tickLine={false}
           tickMargin={0}
          angle={""} />
          <YAxis  />
          <Tooltip  cursor={{fill: '#f1f1f1'}} />
         
          
          <Bar  
          
           margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 30,
          }}
          className="dsndts" dataKey="Disposal Fees" stackId="a" fill="#0b7834" tickMargin={20} barSize={20} />
        </BarChart >
      </ResponsiveContainer>
      </div>
    );
}

export default Disposal;