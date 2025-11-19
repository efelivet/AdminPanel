import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import React, { useMemo, useState } from "react";
import {Link} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, IconButton, Box,Grid,Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

 const data = [
  {
    name: 'Page A',
    q: 4000,
    p: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    q: 3000,
    p: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    q: 2000,
    p: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    q: 2780,
    p: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    q: 1890,
    p: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    q: 2390,
    p: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    q: 3490,
    p: 4300,
    amt: 2100,
  },
];



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lionell', firstName: 'Messi', age: 42 },
  { id: 3, lastName: 'Andres', firstName: 'Iniesta', age: 45 },
  { id: 4, lastName: 'Charles', firstName: 'Tailor', age: 16 },
  { id: 5, lastName: 'Gabriel', firstName: 'James', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };
 export default function DashStats(){
     const [mode, setMode] = useState("light");

    const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === "light"
            ? {
                background: { default: "#fafafa", paper: "#fff" },
              }
            : {
                background: { default: "#121212", paper: "#1e1e1e" },
              }),
        },
      }),
    [mode]
  );

    return(
        <>
                 <ThemeProvider theme={theme}>
      <CssBaseline />

        <Box>
     
      <Box
        sx={{
          height: "20px",
          p: 2,
          display: "flex",   
          alignItems: "center",
          justifyContent: "end",
        }}
      >
       

        {/* Toggle Button */}
        <IconButton
          sx={{
            
            borderColor: "divider",
            p: 0.4,
            borderRadius: "50%",
          }}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "light" ? (
            <Brightness4Icon fontSize="medium" />
          ) : (
            <Brightness7Icon fontSize="medium" />
          )}
        </IconButton>
        <Box>
          <Link to ="/">
        <Typography variant ="body2" sx ={{color:"#641dd8ff"}}>Home</Typography>
        </Link>
        </Box>
      </Box>
  

        <Grid container sx ={{flexDirection:"column",display:"flex",
            justifyContent:"center",alignItems:"center"}} >
            <Grid size ={{sm:12}} sx ={{display:"flex",alignItems:"center",
                justifyContent:"center"}}>

                <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', 
        maxHeight: '50vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="p" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="q" stroke="#82ca9d" />
    </LineChart>
            </Grid>

            
            <Grid size ={{sm:12}} sx ={{diplay:"flex",justifyContent:"center",
                alignItems:"center",maxWidth: '700px'}}>
                 <Paper sx={{ height: 230, width: '100%'  }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
            </Grid>
        </Grid>
        </Box>
          </ThemeProvider>
        </>
    )
 }

