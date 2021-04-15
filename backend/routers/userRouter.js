import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import User from "../models/userModel.js";
import data from "../sampleUsers.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

//http://localhost:5000/api/users/seed --> for testing purposes

//List of users
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //await User.remove({});  ---> deletes all users
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

// api for authentication --> SignIn
// http://localhost:5000/api/users/signin --> to test on postman
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);
//api for /api/users/register
userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);
export default userRouter;
