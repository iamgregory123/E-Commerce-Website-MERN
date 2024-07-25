import { Box, Typography } from '@mui/material';

const PurchaseConfirmation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Typography variant="h1" sx={{ color: 'green', marginBottom: '20px' }}>
          ✔
        </Typography>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Purchase Successful!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Thank you for your purchase. Your order is being processed and will be shipped soon.
        </Typography>
      </Box>
    </Box>
  );
};

export default PurchaseConfirmation;
