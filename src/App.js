
import './App.css';
import './Admstyle.css';

import React, { useEffect } from "react";
import PPChart from './PPChart';
import Peepad from './Peepad';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Disposal from './Disposal';
import Weeklyjob from './Weeklyjob';
import Wastevolume from './Wastevolume';
import Energycoserve from './Energycoserve';
const pdata = [
  {
    name: 'Week 1',
    "Gas Emission": 1103.78,
    "Carbon Emission": 807.16
  },
  {
    name: 'Week 2',
    "Gas Emission": 809.25,
    "Carbon Emission": 789.8
  },
  {
    name: 'Week 3',
    "Gas Emission": 961.83,
    "Carbon Emission": 687.13
  },
  {
    name: 'Week 4',
    "Gas Emission": 1225.98,
    "Carbon Emission": 996.27
  },
  {
    name: 'Week 5',
    "Gas Emission": 460.4,
    "Carbon Emission": 327.5
  },
  
];

const dataemit = [
  {
    name: 'Battery Disposal',
    'Waste Collected': 197.44,
    cts: 11,
  },
  {
    name: 'Desktop Recycling',
    'Waste Collected':191.74,
     cts: 33,
  },
  {
    name: 'Laptop Recycling',
    'Waste Collected':311.89,
   cts:44,
  },
  {
    name: 'Miscellaneous',
    'Waste Collected':285.8,
   cts:54,
  },
  {
    name: 'Mobile Phone Recycling',
  'Waste Collected':244.61,
   cts:65,
  },
  {
    name: 'Printer Recycling',
    'Waste Collected':272.61,
   cts:54,
  },
  {
    name: 'TV Recycling',
    'Waste Collected':248.12,
   cts:52,
  },
];





function App() {


  return (

    
    <>
    <section className="mainadminlayer">

    <header className="site-header topmain mobexheight norm">
  {/*<!----New Updates----->   */}

    <nav className="admnavs">
			<div className="hdlgos">
			<a href="#"><img src= {process.env.PUBLIC_URL + '/images/adlog.png'} alt="admlogo" /></a>
			</div>
        
            {/*<!-- Brand --> */}
			<ul>
				<li data-toggle="tooltip" data-placement="right" title="Home"><a href="welcome-page.html"><i className="fas fa-home"></i></a></li>
				<li data-toggle="tooltip" data-placement="right" title="Lists"><a href="manage-lists.html"><i className="fas fa-th-list"></i></a></li>
				
				<li data-toggle="tooltip" data-placement="right" title="Services"><a href="services-listings.html"><i className="fas fa-chart-pie"></i></a></li>
				<li data-toggle="tooltip" data-placement="right" title="Website Leads"><a href="leads.html"><i className="fas fa-envelope"></i></a></li>
				<li data-toggle="tooltip" data-placement="right" title="Manage Users"><a href="#"><i className="fad fa-users"></i></a></li>
			</ul>
        
    </nav>
	
	<div className="logbotms">
		<div className="usnmshots">
			<p>AY</p>
		</div>
		
		<div className="otplanls">
			<ul>
				<li><a href="account-settings.html"><i className="far fa-cog"></i> Account Settings</a></li>
				<li><a href="#"><i className="far fa-sign-out-alt"></i> Logout</a></li>
			</ul>
		</div>
	</div>
</header>

<div className="panelmainlayer">
<div className="headbluecustom">
		<div className="leftoptionsad">
			<p className="menusubject">Welcome Page</p>
			
		</div>
		
		<div className="rightsoptionsad">
			<p className="menusubject">Hi: <b>Ajeet Yadav</b></p>
		</div>
		
	</div>

     <div className='md-sdprsd'> 
     <div className='md-sd mdm-sdsinfos'> 
        <div className='dtscrds'>
          <h6 className='totalctns'>27.0583</h6>
          <p>Average disposal fee for Collection jobs</p>
        </div>

        <div className='dtscrds'>
          <h6 className='totalctns'>100</h6>
          <p>Number of E-Waste Collection</p>
        </div>
      </div>
     <div className='md-sd mdm-scr'> 
      <h1 className="chart-heading">Percentage of Toxic Substances Safely Disposed</h1>
     <PPChart/>
      
     
      </div>

      <div className='md-sd tvolcs'>
        <h1>Total Volume Of Waste Collected</h1>
        <ResponsiveContainer className="wstcolls" width="100%" height="100%" interval="preserveStartEnd">
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
          angle={-45} />
          <YAxis  />
          <Tooltip  cursor={{fill: '#f1f1f1'}} />
          <Legend className='myss' />
          
          <Bar  
          
           margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 30,
          }}
          className="dsndts" dataKey="Waste Collected" stackId="a" fill="#0b7834" tickMargin={20} barSize={20} />
        </BarChart >
      </ResponsiveContainer>
      </div>
    <div className='md-sd'>
      <h1 className="chart-heading">Reduction in Carbon Emissions and Greenhouse Gas (GHG) Emissions across weeks</h1>
      
      <ResponsiveContainer  className="ccemitsred" width="100%" height="100%">
        <LineChart data={pdata}  margin={{ top: 5, right: 30, left:20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + ""} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#f1f1f1' }} />
          <Legend />
          <Line type="monotone" dataKey="Gas Emission" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Carbon Emission" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer></div>
      

      <div className='md-sd wscts'> 
      <h1 className="chart-heading">
         Percentage of Waste Category Distribution
      </h1>
      <Peepad/>
      </div>

      <div className='md-sd wscts'> 
      <h1 className="chart-heading">
      Distribution of Disposal Fees
      </h1>
      <Disposal/>
      </div>

      <div className='md-sd'> 
      <h1 className="chart-heading">
      Weekly Job Completion Trend
      </h1>
      <Weeklyjob/>
      </div>

      <div className='md-sd wlms'> 
      <h1 className="chart-heading">
      Total Volume of Waste Collected by Category across weeks
      </h1>
      <Wastevolume/>
      </div>


      <div className='md-sd'> 
      <h1 className="chart-heading">
        Energy Conserved by each Service type in Week 4
      </h1>
      <Energycoserve/>
      </div>
     
      </div>
      </div>
      </section>

    </>
  );
}

export default App;
