import React from "react";
import { Box, Grid, Avatar, Typography, Paper } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const progressData = [{ value: 78 }, { value: 22 }];
const COLORS = ["#4CAF50", "#1E1E2F"];

const lineData = [
  { name: "Jan", uv: 30 },
  { name: "Feb", uv: 50 },
  { name: "Mar", uv: 45 },
  { name: "Apr", uv: 70 },
  { name: "May", uv: 60 },
  { name: "Jun", uv: 90 },
];

const RightColumn = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        background: "#151735",
        padding: 2,
        borderRadius: 2,
       borderBottom:"4px solid #0f0caaff",
      }}
    
    >

      {/* PROFILE */}
      <Grid size ={{xs:6}} >
        <Paper sx={{ background: "#151735", p: 3,
           borderRadius: 3,maxWidth:400 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              src="https://i.pravatar.cc/150?img=5"
              sx={{ width: 56, height: 56 }}
            />
            <Box>
              <Typography color="white" fontSize={10}>
                Welcome back,
              </Typography>
              <Typography color="white" fontWeight="bold" fontSize={12}>
                Tracy Anderson!
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>

      {/* PIE CHART — EXPANDED WIDTH/HEIGHT */}
      <Grid item xs={12} sm={6} md={4} >
        <Paper sx={{ background: "#151735", p: 1,
           borderRadius: 3,minWidth:180}}>
          <Typography variant ="body2" sx ={{fontSize:"0.7rem"}} mb={2} color="white">42.5k</Typography>
          <Typography variant ="body2"sx ={{fontSize:"0.5rem"}} mb={2} color="white">
            Active Users
          </Typography>

          {/* Increased width & height */}
          <Box sx={{ width:'100%',height:85 }}>
            <ResponsiveContainer >
              <PieChart >
                <Pie
               
                  data={progressData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={35}     // increased
                  outerRadius={40}    // increased
                  startAngle={-20}
                  endAngle={340}
                  paddingAngle={2}     // smoother edges
                >
                  {progressData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>

                {/* 78% CENTER TEXT */}
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  fontSize="26px"
                  fontWeight="bold"
                >
                  78%
                </text>
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      {/* LINE CHART — EXPANDED WIDTH/HEIGHT */}
      <Grid item xs={12} sm={6} md={4} >
        <Paper sx={{ background: "#151735", p: 1,
          borderRadius: 3,minWidth:180}}  >
          <Typography mb={2} color="white" sx ={{fontSize:"0.7rem"}}>97.4k</Typography>
          <Typography mb={2} color="white" sx ={{fontSize:"0.5rem"}}>Total Users</Typography>

          <Box sx={{ width: "100%", height:85 }}>
            <ResponsiveContainer>
              <LineChart data={lineData}>
                <XAxis dataKey="name" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#42a5f5"
                  strokeWidth={3}   
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

    </Grid>
  );
};

export default RightColumn;
