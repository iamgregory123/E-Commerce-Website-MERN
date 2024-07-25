import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Formsign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("clicked")
      const response = await axios.post('http://localhost:3000/signup', { username, email, password });
      localStorage.setItem('token', response.data);
      alert("Registered Successfully");
      navigate('/login');
      // Redirect to home page or show success message
    } catch (error) {
      alert("Already Registered User");
      console.error(error);
    }
  };

  return (
    <>
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius:'20px'}}>
      <div>
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' ,paddingTop:2}}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <img src='https://imgs.search.brave.com/OP9w7kx0ZQsHEMdahDZUQ6Z5R2lWN41NvhpYTOgyndU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGVw/c2ktbG9nby1tb2Rl/cm4tZGVzaWduLTVl/NmNiZDdxYWdxeHRl/M3QtMi5wbmc' width={50} height={50} style={{ borderRadius: 50 }} />
            <Box sx={{ color: 'black' }}>
              <Button color="inherit"><Link to={'/'} style={{ textDecoration: 'none', color: 'white', fontWeight: 550 }}>Home</Link></Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85vh',
        
      }}>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          padding: 20,
          borderRadius: 10,
          backgroundColor: 'white',
          boxShadow:'20px'
        }}>
          <Typography><h1 style={{ color: 'black' }}>User SignUp</h1></Typography>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" 
            style={{ width: '250px', height: '30px', padding: '5px' }}
          />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            style={{ width: '250px', height: '30px', padding: '5px' }}
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            style={{ width: '250px', height: '30px', padding: '5px' }}
          />
          <button type="submit" style={{ cursor: 'pointer', height: '40px', width: '80px',color:'white',backgroundColor:'#110074',border:'none',borderRadius:'5px' }}>SignUp</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Formsign;
