import { Box, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;

  const handleBuyNow = () => {
    navigate('/confirm');
  };

  return (
    
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)', // Gradient background
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          width: '80vw',
          maxWidth: '1200px',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          gap: '20px',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <img
            src={`http://localhost:3000/uploads/${product.image}`}
            alt={product.name}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '15px',
              border: '2px solid #e5e7eb', // Subtle border
            }}
          />
        </Box>

        {/* Product Details Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '10px',
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" fontWeight={500} color="text.primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {/* Here you can add a brief description of the product */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: '20px',
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#0056b3', // Darker shade on hover
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
              },
            }}
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetail;
