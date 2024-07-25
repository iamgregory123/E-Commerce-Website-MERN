import React from 'react';
import { AppBar, Box, Button, Card, CardContent, CardMedia, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '95vh',
          width: '95vw',
          textAlign: 'center',
          paddingTop: 3,
          paddingLeft: 4,
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,1) 4%, rgba(17,0,116,1) 100%)',
          borderRadius: '20px',
          margin: 'auto', // Ensure the box is centered
        }}
      >
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', paddingBottom: 11, justifyContent: 'center' }}>
          <Toolbar sx={{ gap: 120 }}>
            <img src='https://imgs.search.brave.com/OP9w7kx0ZQsHEMdahDZUQ6Z5R2lWN41NvhpYTOgyndU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGVw/c2ktbG9nby1tb2Rl/cm4tZGVzaWduLTVl/NmNiZDdxYWdxeHRl/M3QtMi5wbmc' alt="Logo" width={50} height={50} />
            <Box>
              <Button color="inherit">
                <Link to={'/adminlogin'} style={{ textDecoration: 'none', color: 'white', fontWeight: 550 }}>Admin</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/sellogin'} style={{ textDecoration: 'none', color: 'white', fontWeight: 550 }}>Sell</Link>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Typography
          sx={{
            color: 'whitesmoke',
            fontWeight: 600,
            fontSize: 75,
            lineHeight: '6rem'
          }}
        >
          Discover Your Next <br />Favorite Clothing
        </Typography>

        <Typography
          sx={{
            marginTop: '1rem',
            color: 'whitesmoke',
            fontSize: 14
          }}
        >
          Browse our extensive collection of unique clothes in unbeatable deals. <br />Shop now and enjoy fast, secure, and seamless online shopping!
        </Typography>
        <Box sx={{ display: 'flex', paddingTop: '10px' }}>
          <Button color="inherit">
            <Link to={'/signup'} style={{ textDecoration: 'none', color: 'white', fontWeight: 550, padding: '7px 15px', border: '2px solid white', marginTop: '15px', borderRadius: "5px" }}>SignUp</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/login'} style={{ textDecoration: 'none', color: '#110074', fontWeight: 550, backgroundColor: "white", padding: '7px 15px', borderRadius: "5px", marginTop: '15px' }}>Login</Link>
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center',marginTop:8 }}>
        <AppBar position="static" sx={{ borderRadius: '20px', marginTop: '20px', justifyContent: "center", alignItems: 'center', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,1) 4%, rgba(17,0,116,1) 100%)' }}>
          <Toolbar sx={{ gap: 120 }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '200px' }}>70% Off On Shoes</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: 50 }}>
        <Card sx={{ width: '220px', marginTop: 2, boxShadow: 5 ,borderRadius:5,cursor:'pointer'}}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://imgs.search.brave.com/yFgMPc-CHKwybkHIS0XgZkjXrSVTkhJ_ys1QvwHgIV0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ1L2M4/LzdiLzQ1Yzg3YjY0/MTJlYjNkOWFkOTgy/Y2IxMTBlNDIyZWJk/LmpwZw"
            title="Nike"
          />
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', background: 'linear-gradient(to right, #0968e5 4%, #091970 100%)' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '70px', color: 'white' }}>
              Nike
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '220px', marginTop: 2, boxShadow: 5,borderRadius:5 ,cursor:'pointer'}}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://imgs.search.brave.com/KURTQExFaILzO1Wxv_gbCMycGdFKq4R6mcCEaozY-s4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFPK0FDSjBGWkwu/anBn"
            title="Adidas"
          />
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', background: 'linear-gradient(to right, #0968e5 4%, #091970 100%)' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '70px', color: 'white' }}>
              Adidas
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '220px', marginTop: 2, boxShadow: 5,borderRadius:5 ,cursor:'pointer'}}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://imgs.search.brave.com/a2ERu7r5O0Ixg7JisTpjmNHZZa3WLhe1SHerhbV0zVc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9taWxs/ZW5uaXVtc2hvZXMu/Y29tL2Nkbi9zaG9w/L3Byb2R1Y3RzL0FV/Uk9SQV9EUTg0MjYt/MTA2X1BIU1JIMDAw/LTIwMDBfNTQweC5q/cGc_dj0xNjkwNDkw/MDQx"
            title="Jordan"
          />
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', background: 'linear-gradient(to right, #0968e5 4%, #091970 100%)' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '70px', color: 'white' }}>
              Jordan
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '220px', marginTop: 2, boxShadow: 5 ,borderRadius:5 ,cursor:'pointer'}}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://imgs.search.brave.com/HPdgAw8qhcjVziIUJrHOKNkkyUc5OiXSPuj-x5ZXS8U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFKNTYwQ2xTLUwu/anBn"
            title="Fila"
          />
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', background: 'linear-gradient(to right, #0968e5 4%, #091970 100%)' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '70px', color: 'white' }}>
              Fila
            </Typography>
          </CardContent>
        </Card>

      </div>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' ,marginTop:5}}>
        <AppBar position="static" sx={{ borderRadius: '20px', marginTop: '20px', justifyContent: "center", alignItems: 'center', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,1) 4%, rgba(17,0,116,1) 100%)' }}>
          <Toolbar sx={{ gap: 120 }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '200px' }}>50% Off On Ladies Wear</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: 50 }}>
        <Card sx={{ width: '220px', marginTop: 2, boxShadow: 5 ,borderRadius:5,cursor:'pointer'}}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://imgs.search.brave.com/lWLBE9oH_8SRI6NKyJd2y1pBqoc3dpkxrcoYtFhkWIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF0NTZ4cW9Sdkwu/anBn"
            title="Nike"
          />
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', background: 'linear-gradient(to right, #0968e5 4%, #091970 100%)' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '70px', color: 'white' }}>
              Sports
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '220px', marginTop: 2, boxShadow: 5,borderRadius:5 ,cursor:'pointer'}}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://imgs.search.brave.com/yvCg31diTW7o-MU9eqnEGYA6dAcqyd7S8dF29kkTsm4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxhbW9kZWxhYmVs/LmluL2Nkbi9zaG9w/L3Byb2R1Y3RzL2lt/YWdlXzYxNDY1Zjhk/LWY4ZTItNDFhMi04/NjVkLTlhYmI4NGIw/ZWI4ZF82MDB4Lmpw/Zz92PTE3MTc0OTc2/NDc"
            title="Adidas"
          />
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', background: 'linear-gradient(to right, #0968e5 4%, #091970 100%)' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '70px', color: 'white' }}>
              Party
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '220px', marginTop: 2, boxShadow: 5,borderRadius:5 ,cursor:'pointer'}}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://imgs.search.brave.com/FWineWs4-N_CaNIiOo3hQ1HpMMqMH_nmoC3pPK-addU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnN0eWxlY3JhemUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAxL1RyYWRp/dGlvbmFsLUluZGlh/bi1EcmVzc2VzLVRo/YXQtRXZlcnktR2ly/bC1DYW4tV2Vhci5q/cGcud2VicA"
            title="Jordan"
          />
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', background: 'linear-gradient(to right, #0968e5 4%, #091970 100%)' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '70px', color: 'white' }}>
              Traditional
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '220px', marginTop: 2, boxShadow: 5 ,borderRadius:5 ,cursor:'pointer'}}>
          <CardMedia
            sx={{ height: 200 , backgroundSize:'cover',backgroundPosition: 'center'}}
            image="https://imgs.search.brave.com/epvtsKxeSkPiCzv2DUlXRzINmpij-PDmNha5BdlNkaQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ib2hv/YnVmZmFsby5jb20v/Y2RuL3Nob3AvZmls/ZXMvV2VzdGVyblN0/eWxlRnJpbmdlU2tp/cnRfMmE1NWZhZmEt/ODliYS00YTQxLThk/MTMtYWE0ODBjOWI5/N2NkXzYwMHguanBn/P3Y9MTcxMTgxODUy/MA"
            title="Fila"
          />
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', background: 'linear-gradient(to right, #0968e5 4%, #091970 100%)' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '70px', color: 'white' }}>
              Western
            </Typography>
          </CardContent>
        </Card>

      </div>
      
    </>
  );
};

export default Hero;
