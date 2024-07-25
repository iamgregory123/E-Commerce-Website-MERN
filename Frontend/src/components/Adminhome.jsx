import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Adm = () => {
  return (
    <>
      <div>
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <div style={{borderRadius:'20px'}}>
              <img src='https://imgs.search.brave.com/OP9w7kx0ZQsHEMdahDZUQ6Z5R2lWN41NvhpYTOgyndU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGVw/c2ktbG9nby1tb2Rl/cm4tZGVzaWduLTVl/NmNiZDdxYWdxeHRl/M3QtMi5wbmc' width={50} height={50} style={{ borderRadius: 50 }}/>
            </div>
            <Box sx={{ color: 'black' }}>
              <Button color="inherit"><Link to={'/'} style={{textDecoration:'none', color:'#110074', fontWeight: 550}}>Logout</Link></Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Typography variant='h3' sx={{ color: 'black', marginTop: '20px', fontWeight:550 }}>Admin</Typography>
      </div>
      <div style={{display:'flex',alignItems:'center', justifyContent:'center', gap:'30px',marginTop:'150px'}}>
        <Button color="inherit"><Link to={'/adpro'} style={{textDecoration:'none', color:'white', fontWeight: 550, backgroundColor:'#110074', padding:'10px 25px', borderRadius:8}}>Products</Link></Button>
        <Button color="inherit"><Link to={'/userlist'} style={{textDecoration:'none', color:'white', fontWeight: 550, backgroundColor:'#110074', padding:'10px 25px', borderRadius:8}}>Users</Link></Button>
      </div>
    </>
  );
}

export default Adm;
