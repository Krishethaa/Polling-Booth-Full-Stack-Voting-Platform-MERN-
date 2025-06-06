const express = require('express');
const router = express.Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUserById,
    LoginUser
}=require('../Controller/userController.js');
// 1. CREATE USER
router.post('/create', createUser);

// 2. GET ALL USERS
router.get('/getall', getAllUsers);
// 3. GET USER BY ID
router.get('/getById/:id', getUserById);
// 4. UPDATE USER
router.put('/update/:id', updateUser);
// 5. DELETE USER
router.delete('/deletebyId/:id', deleteUserById);
// 6.LOGIN USER
router.post('/login',LoginUser);

module.exports = router;

