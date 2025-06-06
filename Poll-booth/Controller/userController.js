const User = require('../Model/userModel.js'); // Adjust the path if needed

// 1. CREATE USER
exports.createUser = async (req, res) => {
    try {
        const {
            user_name,
            user_profile,
            age,
            gender,
            email,
            phone_number,
            password
        } = req.body;

        // Check for required fields
        if (!user_name || !email || !phone_number || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }


        const user = await User.create({
            user_name,
            user_profile,
            age,
            gender,
            email,
            phone_number,
            password
        });

        res.status(200).json({
            sucess:true,
            message: "User created successfully",
            data: user
        });
    } catch (err) {
        res.status(500).json({
            success:false,  
            message: "Server error",
            error: err.message
        });
    }
};

// 2. GET ALL USERS
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json({ message: "Users retrieved", data: users });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 3. GET USER BY ID
exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User found", data: user });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 4. UPDATE USER
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            user_name,
            user_profile,
            age,
            gender,
            email,
            phone_number,
            password
        } = req.body;

        const updateObj = {};

        // Only allow updating specific fields
        if (user_name) updateObj.user_name = user_name;
        if (user_profile) updateObj.user_profile = user_profile;
        if (age) updateObj.age = age;
        if (gender) updateObj.gender = gender;
        if (email) updateObj.email = email;
        if (phone_number) updateObj.phone_number = phone_number;
        if (password) updateObj.password = password;



        const updatedUser = await User.findByIdAndUpdate(id, updateObj, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated", data: updatedUser });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 5. DELETE USER BY ID
exports.deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await User.findByIdAndDelete(id);

        res.status(200).json({ message: "User deleted", data: user });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 6. LOGIN USER (using phone number and password)
exports.LoginUser = async (req, res) => {
    try {
        const { phone_number, password } = req.body;

        // 1. Check if both fields are provided
        if (!phone_number || !password) {
            return res.status(400).json({ message: "Phone number and password are required" });
        }

        // 2. Find user by phone number
        const user = await User.findOne({ phone_number });

        // 3. If user not found
        if (!user) {
            return res.status(404).json({ message: "User not found with this phone number" });
        }

        // 4. Compare passwords (NOTE: plain comparison, update later with hashed password check)
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // 5. Success response (you can send user info)
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                user_id: user._id,
                user_name: user.user_name,
                phone_number: user.phone_number,
                email: user.email
                // You can add more if needed
            }
        });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

