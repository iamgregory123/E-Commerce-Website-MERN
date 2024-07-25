import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hero = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ borderRadius: '20px' }}>
            <img
              src='https://imgs.search.brave.com/OP9w7kx0ZQsHEMdahDZUQ6Z5R2lWN41NvhpYTOgyndU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGVw/c2ktbG9nby1tb2Rl/cm4tZGVzaWduLTVl/NmNiZDdxYWdxeHRl/M3QtMi5wbmc'
              width={50}
              height={50}
              style={{ borderRadius: 50 }}
              alt="Logo"
            />
          </Box>
          <Box sx={{ color: 'black' }}>
            <Button color="inherit">
              <Link to={'/'} style={{ textDecoration: 'none', color: '#110074', fontWeight: 550 }}>
                Logout
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', justifyContent: '', margin: '20px', flexWrap: 'wrap', gap: '16px' }}>
        {products.length > 0 ? (
          products.map((product, i) => (
            <Box 
              key={i} 
              component={Link} 
              to={`/product/${product.id}`} 
              state={{ product }} 
              sx={{ 
                backgroundColor: 'white', 
                width: '200px', 
                height: 'auto',
                padding: '8px', // Reduced padding
                borderRadius: '8px', 
                boxShadow: 10, 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px' // Added gap to control spacing between elements
              }}
            >
              <img
                src={`http://localhost:3000/uploads/${product.image}`}
                alt={product.name}
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
              <Typography fontWeight={550} sx={{ margin: '0', textAlign: 'center' }}>
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4px' }}>
                <Typography fontWeight={550} sx={{ margin: '0', textAlign: 'center' }}>
                  {product.price}₹
                </Typography>
              </Box>
            </Box>
          ))
        ) : (
          <Typography>No products available.</Typography>
        )}
      </Box>
    </>
  );
}

export default Hero;
