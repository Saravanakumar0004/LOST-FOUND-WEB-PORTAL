// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { addData, GetData, deleteData, updateData, getDataById } = require('../controller/usercontroller');
const { protect, admin } = require('../middleware/authMiddleware');
const { registerUser, loginUser } = require('../controller/authController');

router.post('/register', registerUser); // ✅ register route
router.post('/login', loginUser);       // ✅ login route

// 🟢 Public route (everyone can read)
router.get('/', GetData);

// 🔒 Admin-only routes
router.post('/', protect, admin, addData);
router.put('/:id', protect, admin, updateData);
router.delete('/:id', protect, admin, deleteData);
router.get('/:id', getDataById); // 👈 This line is required


module.exports = router;
