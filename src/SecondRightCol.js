import React from 'react'
import { 
  BarChart, Bar, Rectangle, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Line, 
  LineChart
} from 'recharts';
import { Box, Grid, Paper,Stack,Typography } from '@mui/material';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const deviceData = [
  { name: "Desktop", value: 35, color: "#3F8CFF" },   // blue
  { name: "Tablet", value: 48, color: "#FF4C61" },    // red
  { name: "Mobile", value: 27, color: "#34D399" },    // green
];

const SecondRightCol = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        background: "#151735",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Grid item xs={12}>
        <Paper sx={{ background: "#151735", p: 1, borderRadius: 3,width:200 }}>
          
          {/* The height MUST be set here */}
          <Box sx={{ width: "100%", height: 150 }}>
            
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Bar 
                  dataKey="pv" 
                  fill="#8884d8" 
                  activeBar={<Rectangle fill="pink" stroke="blue" />} 
                />
                
                <Bar 
                  dataKey="uv" 
                  fill="#82ca9d" 
                  activeBar={<Rectangle fill="gold" stroke="purple" />} 
                />
              </BarChart>
            </ResponsiveContainer>

          </Box>
        </Paper>
      </Grid>

            <Grid  item xs={12}>
                <Paper sx={{ background: "#151735", p: 1, borderRadius: 3,width:200 }}>
                     {/* Card Title */}
      <Typography fontSize="0.85rem" mb={1} sx={{ opacity: 0.9 }}>
        Device Type
      </Typography>

      {/* CHART CONTAINER */}
      <Box sx={{ width: "100%", height: 140 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={deviceData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={70}
              stroke="none"
              paddingAngle={2}
            >
              {deviceData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            {/* CENTER TEXT */}
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#ffffff"
              fontSize="22px"
              fontWeight="bold"
            >
              68%
            </text>

            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#cccccc"
              fontSize="12px"
            >
              Total Views
            </text>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* LEGEND */}
      <Stack spacing={1} mt={1}>
        {deviceData.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "3px",
                  background: item.color,
                }}
              />
              <Typography fontSize="0.75rem">{item.name}</Typography>
            </Box>

            <Typography fontSize="0.75rem">{item.value}%</Typography>
          </Box>
        ))}
      </Stack>
                </Paper>
            </Grid>

            <Grid item xs={12}>
        <Paper sx={{ background: "#151735", p: 1, borderRadius: 3,width:180 }}>
          
          {/* The height MUST be set here */}
          <Box sx={{ width: "100%", height: 150 }}>
            
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
      style={{  aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
            </ResponsiveContainer>

          </Box>
        </Paper>
      </Grid>
            <Grid item xs={12}>
        <Paper sx={{ background: "#151735", p: 1, borderRadius: 3,width:180 }}>
          
          {/* The height MUST be set here */}
          <Box sx={{ width: "100%", height: 150 }}>
            
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
      style={{  aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
            </ResponsiveContainer>

          </Box>
        </Paper>
      </Grid>



    </Grid>
  );
};

export default SecondRightCol;





