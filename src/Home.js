 import './App.css';
 import React from 'react';
 import { Box,Badge,Grid,Typography} from '@mui/material'
 import {Link,Outlet} from 'react-router-dom'
 
 import RightColumn from './RightColumn'
 import SecondRightCol from './SecondRightCol';
 import MenuIcon from '@mui/icons-material/Menu';
 import SearchIcon from '@mui/icons-material/Search';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
 import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
 
 import HomeIcon from '@mui/icons-material/Home';
 import ArrowRightIcon from '@mui/icons-material/ArrowRight';
 import WidgetsIcon from '@mui/icons-material/Widgets';
 import AppsIcon from '@mui/icons-material/Apps';
 import CreditCardIcon from '@mui/icons-material/CreditCard';
 import StoreIcon from '@mui/icons-material/Store';
 
 import TableChartIcon from '@mui/icons-material/TableChart';
 import TocIcon from '@mui/icons-material/Toc';
 
 import LockIcon from '@mui/icons-material/Lock';
 import PersonIcon from '@mui/icons-material/Person';
 import TimelineIcon from '@mui/icons-material/Timeline';
 
 import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
 import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
 import CandlestickChartRoundedIcon from '@mui/icons-material/CandlestickChartRounded';
 
 
 function Home() {
 
 
   return (
     <Grid container sx ={{display:"flex",background: "#151735",height:"100vh"}} >
      <Grid size ={{xs:2,md:2}} sx ={{background: "#151735"}}>
          <Box sx ={{p:1}}>
             
                <Box sx ={{display:"flex",gap:0.5,mb:1,
                 justifyContent:"start",alignItems:"center"}}>
                 <Box style={{color:"white"}}><HomeIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>
                  <Link to ="/dashStats" style={{textDecoration:"none",color:"#fff",
                    cursor:"pointer",
                  }}> Dashboard</Link>
                 
                  </Box>
                 </Typography>
                </Box>
                <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><ArrowRightIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>
                  <Link to ="/analysis" style={{textDecoration:"none",color:"#fff",
                    cursor:"pointer",
                  }}>Analysis</Link>
                  
                  </Box>
                 </Typography>
                </Box>
                <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><ArrowRightIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>eCommerce</Box>
                 </Typography>
                </Box>
                <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><WidgetsIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>Widget</Box>
                 </Typography>
                </Box>
                <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><AppsIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>Apps</Box>
                 </Typography>
                </Box>
                <Typography  sx ={{color:"#fff",fontSize:"0.6rem",mb:1,}}>UI ELEMENTS</Typography>
                <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><CreditCardIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>Cards</Box>
                 </Typography>
                </Box>
                <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><StoreIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>eCommerce</Box>
                 </Typography>
                </Box>
                <Typography sx ={{color:"#fff",fontSize:"0.6rem",mb:1,}}>FORMS AND TABLES</Typography>
                 <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><TocIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>Forms</Box>
                 </Typography>
                </Box>
                 <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><TableChartIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>Tables</Box>
                 </Typography>
                </Box>
                <Typography sx ={{color:"#fff",fontSize:"0.6rem",mb:1,}}>Pages</Typography>
                  <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center"}}>
                 <Box style={{color:"white"}}><LockIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>Authentication</Box>
                 </Typography>
                </Box>
                  <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><PersonIcon sx ={{fontSize:"small"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>User Profile</Box>
                 </Typography>
                </Box>
                  <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><TimelineIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>Timeline</Box>
                 </Typography>
                </Box>
                  <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><LiveHelpRoundedIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>FAQ</Box>
                 </Typography>
                </Box>
                  <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center",mb:1,}}>
                 <Box style={{color:"white"}}><CurrencyBitcoinRoundedIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>Pricing</Box>
                 </Typography>
                </Box>
                <Typography sx={{color:"#fff",fontSize:"0.6rem",mb:1,}}>CHARTS & MAPS</Typography>
                  <Box sx ={{display:"flex",gap:0.5,justifyContent:"start",alignItems:"center"}}>
                 <Box style={{color:"white"}}><CandlestickChartRoundedIcon sx ={{fontSize:"medium"}}/></Box>
                <Typography >
                <Box style={{color:"white",fontSize:"0.6rem"}}>Charts</Box>
                 </Typography>
                </Box>
                <Outlet/>
             </Box>

      </Grid>
 
      <Grid size ={{xs:12,md:10}} sx ={{background: "#151735"}}>
       <Box sx ={{ display:"flex",m:0.8,justifyContent:"space-between"}}>
         <MenuIcon sx ={{color:"#fff"}}/>
 
         <Box sx={{position:"relative",flex: 1,
           maxWidth: { xs: 200, sm: 350, md: 450}}} >        
             <input  placeholder = "Search"  style={{
             width: '100%',
             background: "#151735",
             padding: '10px',
             height:"20px",
             borderRadius:"10px",
             paddingLeft: "35px",
             border:"1px solid white",           
     }}/>
          
           <Box sx={{
                 color: '#fff',
                 position: 'absolute',
                 left: '12px',
                 top: '60%',
                 transform: 'translateY(-50%)',
                 pointerEvents: 'none',
               }}>
             <SearchIcon sx ={{color:"#fff",fontSize:15}}/>
           </Box>
 
         </Box>
        
        <Box sx ={{display:"flex",gap:2,mt:0.5}} >
         <Badge badgeContent={4} color ="error"
         sx={{"& .MuiBadge-badge":{
           fontSize:"0.6rem",
           height:"16px",
           minWidth:"16px",
          
         }}}>
           <NotificationsNoneIcon sx ={{color :"#fff"}}/>
         </Badge>
       
         <Badge badgeContent={4}   color ="error"
         sx={{"& .MuiBadge-badge":{
           fontSize:"0.6rem",
           height:"16px",
           minWidth:"16px",
           marginLeft:10,
         }}}>
           <ShoppingCartOutlinedIcon sx ={{color :"#fff"}}/>
          
         </Badge>
 
         <PersonOutlineIcon sx ={{color:"#fff"}}/>
        </Box>
       
       </Box>
        <Box sx ={{borderLeft:"4px solid #0f0caaff",borderBottom:"4px solid #0f0caaff",
          borderRight:"4px solid #0f0caaff"}} >
        <RightColumn  />
       
        <Box><SecondRightCol/></Box>
       
       </Box>
             
      </Grid>
     </Grid>
   );
 }
 
 export default Home;
 