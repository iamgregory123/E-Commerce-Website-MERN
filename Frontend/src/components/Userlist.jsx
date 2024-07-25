import { AppBar, Box, Button, Toolbar, Typography, Modal, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Userlist = () => {
    const [ans, setAns] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({ _id: '', username: '', email: '' });

    useEffect(() => {
        axios.get("http://localhost:3000/user/get")
            .then((res) => {
                console.log(res.data);
                setAns(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/user/delete/${id}`)
            .then((res) => {
                console.log("User deleted:", res.data);
                setAns(ans.filter(user => user._id !== id));
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    };

    const handleUpdate = (user) => {
        setCurrentUser(user);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        axios.put(`http://localhost:3000/user/update/${currentUser._id}`, currentUser)
            .then((res) => {
                console.log("User updated:", res.data);
                setAns(ans.map(user => (user._id === currentUser._id ? currentUser : user)));
                setOpen(false);
            })
            .catch((error) => {
                console.error("Error updating user:", error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

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
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                {ans.length > 0 ? (
                    ans.map((val, i) => (
                        <Box key={i} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', width: '40vw', padding: '16px', borderRadius: '8px', boxShadow: 10 }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography fontWeight={550} sx={{ marginTop: '3px' }}>Name: {val.username}</Typography>
                                    <Typography fontWeight={550} sx={{ marginTop: '30px' }}>Email: {val.email}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <button style={{ backgroundColor: 'darkred', border: 'none', borderRadius: '3px', height: '35px', cursor: 'pointer' }} onClick={() => handleDelete(val._id)}>
                                        <Typography sx={{ color: 'white' }}>Delete</Typography>
                                    </button>
                                    <button style={{ backgroundColor: 'darkblue', border: 'none', borderRadius: '3px', height: '35px', marginTop: '15px', cursor: 'pointer' }} onClick={() => handleUpdate(val)}>
                                        <Typography sx={{ color: 'white' }}>Update</Typography>
                                    </button>
                                </Box>
                            </Box>
                        </Box>
                    ))
                ) : (
                    <Typography>No users found.</Typography>
                )}
            </Box>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px', margin: 'auto', backgroundColor: 'white', width: '300px', borderRadius: '8px', boxShadow: 24 }}>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>Update User</Typography>
                    <TextField label="Username" name="username" value={currentUser.username} onChange={handleChange} sx={{ marginBottom: '10px' }} />
                    <TextField label="Email" name="email" value={currentUser.email} onChange={handleChange} sx={{ marginBottom: '10px' }} />
                    <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginBottom: '10px' }}>Save</Button>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                </Box>
            </Modal>
        </>
    );
}

export default Userlist;
