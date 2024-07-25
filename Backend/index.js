const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const User = require('./model/user');
const Admin = require('./model/admin');
const Seller = require('./model/seller');
const Product = require('./model/product'); // Assuming you have a Product model

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


require('./connection');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('Email already exists.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid credentials.');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid credentials.');

    const token = jwt.sign({ _id: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
    res.header('auth-token', token).send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get users
app.get('/user/get', async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

// Delete user
app.delete('/user/delete/:id', (req, res) => {
  const userId = req.params.id;

  User.findByIdAndDelete(userId)
    .then((result) => {
      if (result) {
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error deleting user', error });
    });
});

// Update user
app.put('/user/update/:id', (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;

  User.findByIdAndUpdate(userId, { username, email }, { new: true })
    .then((updatedUser) => {
      if (updatedUser) {
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error updating user', error });
    });
});

// Get user profile
app.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

function verifyToken(req, res, next) {
  const token = req.headers['auth-token'];
  if (!token) return res.status(401).send('Access denied. No token provided.');
  try {
    const verified = jwt.verify(token, 'YOUR_SECRET_KEY');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
}

// Admin signup
app.post('/adminsignup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).send('Email already exists.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, email, password: hashedPassword });
    await newAdmin.save();

    res.send(newAdmin);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Admin Login route
app.post('/adminlogin', async (req, res) => {
  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).send('Invalid credentials.');

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) return res.status(400).send('Invalid credentials.');

    const token = jwt.sign({ _id: admin._id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
    res.header('auth-token', token).send(token);
    console.log("helloo");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Seller signup
app.post('/sellsignup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let existingSeller = await Seller.findOne({ email });
    if (existingSeller) return res.status(400).send('Email already exists.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newSeller = new Seller({ username, email, password: hashedPassword });
    await newSeller.save();

    res.send(newSeller);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Seller login
app.post('/selllogin', async (req, res) => {
  const { email, password } = req.body;
  try {
    let seller = await Seller.findOne({ email });
    if (!seller) return res.status(400).send('Invalid credentials.');

    const validPassword = await bcrypt.compare(password, seller.password);
    if (!validPassword) return res.status(400).send('Invalid credentials.');

    const token = jwt.sign({ _id: seller._id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
    res.header('auth-token', token).send(token);
    console.log("helloo");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Product creation route
app.post('/api/products', upload.single('image'), async (req, res) => {
  const { name, price } = req.body;
  const image = `${req.file.filename}`;

  try {
      const newProduct = new Product({ name, price, image });
      await newProduct.save();
      res.status(201).send(newProduct);
  } catch (error) {
      res.status(500).send(error.message);
  }
});

// Fetch products route
app.get('/api/products', async (req, res) => {
  try {
      const data = await Product.find();
      res.send(data);
  } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal server error' });
  }
});



// Delete product
app.delete('/product/delete/:id', (req, res) => {
  const userId = req.params.id;

  Product.findByIdAndDelete(userId)
    .then((result) => {
      if (result) {
        res.status(200).json({ message: 'product deleted successfully' });
      } else {
        res.status(404).json({ message: 'product not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error deleting product', error });
    });
});

// Update product
app.put('/product/update/:id', upload.single('image'), (req, res) => {
  const userId = req.params.id;
  const { name, price } = req.body;
  const image = req.file ? req.file.filename : null;

  Product.findByIdAndUpdate(
    userId,
    { name, price, image },
    { new: true }
  )
    .then((updatedProduct) => {
      if (updatedProduct) {
        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error updating product', error });
    });
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));