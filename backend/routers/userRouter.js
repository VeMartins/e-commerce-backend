import express from "express";
import expressAsyncHandler from "express-async-handler";

import {
  postRegisterUser,
  postSignUserIn,
  getUser,
  putUpdateUser,
} from "../controllers/userController.js";
import { isAuth } from "../utils.js";

const userRouter = express.Router();

// /api/users/signin
userRouter.post("/signin", expressAsyncHandler(postSignUserIn));

// /api/users/register
userRouter.post("/register", expressAsyncHandler(postRegisterUser));

// /api/users/:id
userRouter.get("/:id", expressAsyncHandler(getUser));

// /api/users/userprofile
userRouter.put("/userprofile", isAuth, expressAsyncHandler(putUpdateUser));
export default userRouter;

//import data from "../sampleUsers.js";
// http://localhost:5000/api/users/signin --> to test on postman
//http://localhost:5000/api/users/seed --> for testing purposes

//List of users
/*userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //await User.remove({});  ---> deletes all users
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);*/
