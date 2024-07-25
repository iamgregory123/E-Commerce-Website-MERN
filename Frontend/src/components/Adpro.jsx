import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Box, Button, TextField, Toolbar, Typography, Modal, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Adpro = () => {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setEditOpen(false);
        setSelectedProduct(null);
        setProductName('');
        setProductPrice('');
        setProductImage(null);
    };

    const handleImageChange = (e) => {
        setProductImage(e.target.files[0]);
    };

    const handleAddProduct = async () => {
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('price', productPrice);
        formData.append('image', productImage);

        try {
            const response = await axios.post('http://localhost:3000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setProducts([...products, response.data]);
            handleClose();
        } catch (error) {
            console.error('There was an error uploading the product!', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/product/delete/${id}`);
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEditProduct = async () => {
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('price', productPrice);
        if (productImage) formData.append('image', productImage);

        try {
            const response = await axios.put(`http://localhost:3000/product/update/${selectedProduct._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setProducts(products.map(product => (product._id === response.data.product._id ? response.data.product : product)));
            handleClose();
        } catch (error) {
            console.error('There was an error updating the product!', error);
        }
    };

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

            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '30px' }}>
                {products.length > 0 ? (
                    <Grid container spacing={2}>
                        {products.map((product, i) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: 10 }}>
                                    <Box sx={{ flex: 1 }}>
                                        <img src={`http://localhost:3000/uploads/${product.image}`} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '2px', gap: 'none' }}>
                                            <Typography fontWeight={550} sx={{ marginTop: '3px' }}>Name: {product.name}</Typography>
                                            <Typography fontWeight={550} sx={{ marginTop: '3px' }}>Price: ${product.price}</Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10px' }}>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            sx={{ marginBottom: '10px' }}
                                            onClick={() => handleDeleteProduct(product._id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                setSelectedProduct(product);
                                                setProductName(product.name);
                                                setProductPrice(product.price);
                                                setEditOpen(true);
                                            }}
                                        >
                                            Update
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography>No products available</Typography>
                )}

                

                <Modal open={open} onClose={handleClose}>
                    <Box sx={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4,
                    }}>
                        <Typography variant="h6" component="h2" sx={{ marginBottom: '20px' }}>
                            Add Product
                        </Typography>
                        <TextField
                            fullWidth
                            label="Product Name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            sx={{ marginBottom: '20px' }}
                        />
                        <TextField
                            fullWidth
                            label="Product Price"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            sx={{ marginBottom: '20px' }}
                        />
                        <Button
                            variant="contained"
                            component="label"
                            fullWidth
                            sx={{ marginBottom: '20px' }}
                        >
                            Upload Image
                            <input
                                type="file"
                                hidden
                                onChange={handleImageChange}
                            />
                        </Button>
                        <Button variant="contained" color="primary" fullWidth onClick={handleAddProduct}>
                            Add Product
                        </Button>
                    </Box>
                </Modal>

                <Modal open={editOpen} onClose={handleClose}>
                    <Box sx={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4,
                    }}>
                        <Typography variant="h6" component="h2" sx={{ marginBottom: '20px' }}>
                            Update Product
                        </Typography>
                        <TextField
                            fullWidth
                            label="Product Name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            sx={{ marginBottom: '20px' }}
                        />
                        <TextField
                            fullWidth
                            label="Product Price"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            sx={{ marginBottom: '20px' }}
                        />
                        <Button
                            variant="contained"
                            component="label"
                            fullWidth
                            sx={{ marginBottom: '20px' }}
                        >
                            Upload Image (Optional)
                            <input
                                type="file"
                                hidden
                                onChange={handleImageChange}
                            />
                        </Button>
                        <Button variant="contained" color="primary" fullWidth onClick={handleEditProduct}>
                            Update Product
                        </Button>
                    </Box>
                </Modal>
            </Box>
        </>
    );
};

export default Adpro;
