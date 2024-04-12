const User =require('../modals/userModel');
const bcrypt=require('bcryptjs');
const asyncHandler=require('../middlewares/asyncHandler');
const createToken=require('../utils/createToken')

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password)

  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User with this email already exists, please choose another email' });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    createToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      message: `${username}  User created successfully`, 
    });
  } catch (error) {
    res.status(400).json({ message: 'Invalid user data' });
  }
});


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  console.log(email);
  console.log(password);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      createToken(res, existingUser._id);

      res.status(201).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
        message: `${email}  Login successfully`, 
      });
    } else {
      res.status(401).json({
        message: 'Invalid password. Please try again.',
      });
    }
  } else {
    res.status(404).json({
      message: 'User not found. Please check your email.',
    });
  }
});


const logoutCurrentUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httyOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});
const countTotalemails = async (req, res) => {
  try {
    const totalEmails = await User.countDocuments();
    res.json({ totalEmails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {createUser,loginUser,logoutCurrentUser,countTotalemails};