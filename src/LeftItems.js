 import React from 'react';
 import {Box, Typography} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AppsIcon from '@mui/icons-material/Apps';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import TableChartIcon from '@mui/icons-material/TableChart';
import TocIcon from '@mui/icons-material/Toc';
import TableBarIcon from '@mui/icons-material/TableBar';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import TimelineIcon from '@mui/icons-material/Timeline';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import CandlestickChartRoundedIcon from '@mui/icons-material/CandlestickChartRounded';
 export default function LeftItems(){
    const lists =[
       {id:1,num: "", text:"Maxton"},
       {id:2,num:< HomeIcon size ={"small"}/>, text:"Dashboard"},
       {id:3,num:<ArrowRightIcon/>, text:"Analysis"},
       {id:4,num:<ArrowRightIcon/>, text:"eCommerce"},
       {id:5,num:<WidgetsIcon />, text:"Widget"},
       {id:6,num:<AppsIcon/>, text:"Apps"},
       {id:7,num:"", text:"UI ELEMENT"},
       {id:8,num:<CreditCardIcon/>, text:"Cards"},
       {id:9,num:<StoreIcon />, text:"eCommerce"},
       {id:10,num:< CallToActionIcon/>, text:"Components"},
       {id:11,num:<TableChartIcon />, text:"Icons"},
       {id:12,num:"", text:"FORMS & TABLES"},
       {id:13,num:<TocIcon/>, text:"Forms"},
       {id:14,num:<TableBarIcon/>, text:"Tables"},
       {id:15,num:<LockIcon/>, text:"Authentication"},
       {id:16,num:<PersonIcon />, text:"User Profile "},
       {id:17,num:<TimelineIcon/>, text:"Timeline"},
       {id:18,num:"", text:"Pages"},
       {id:19,num:<AutoStoriesIcon/>, text:"FAQ"},
       {id:19,num:<CurrencyBitcoinRoundedIcon/>, text:"Pricing"},
       {id:20,num:<LiveHelpRoundedIcon />, text:"Pricing"},
       {id:21,num:"", text:"CHARTS & MAPS"},
       {id:22,num:<CandlestickChartRoundedIcon/>, text:"Charts"},
      
    ]
   return(
    lists.map((list)=>(
    <Box key ={list.id}>
    <span style ={{display:"flex",justifyContent:"start",alignItems:"center"}}>
        
       <span  style={{color:"white",fontSize:"small"}}>{list.num}</span>
       <Typography variant ="body2">
       <span style={{color:"white",fontSize:"10px", marginLeft:"4px"}}>{list.text}</span>
        </Typography>
       
    </span>
   
  
   </Box>)
    ))
   
 }