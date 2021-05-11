import express from "express";
import expressAsyncHandler from "express-async-handler";

import sgMail from "@sendgrid/mail";
import { isAuth } from "../utils.js";

const mailRouter = express.Router();
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

mailRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const msg = {
      to: process.env.EMAIL,
      from: req.body.email,
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.text,
    };
    try {
      await sgMail.send(msg);
      res.send({ message: "Message sent", sentMessage: msg });
      console.log("success");
    } catch (error) {
      res.status(404).send({ message: "Message could not be sent" });
      if (error.response) {
        console.error(error.response.body);
      }
    }
  })
);

export default mailRouter;
