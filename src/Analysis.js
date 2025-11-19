 import { Typography,Box } from '@mui/material';
import React from 'react';
import {Link} from "react-router-dom";

 export default function Analysis(){

    return(
        <Box sx ={{height:"100vh",display:"flex",
        alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <Typography>This page is loading....</Typography>
        <Link to ="/">Home</Link>
        </Box>
    )
 }