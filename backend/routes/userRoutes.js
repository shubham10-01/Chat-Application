const express = require("express");

const { registerUser, authUser, allUsers } = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route('/').post(registerUser).get(protect, allUsers).get(allUsers);
router.post('/login', authUser);

module.exports = router;