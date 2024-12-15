import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;
    
    if (!token)
      return res.status(403).json({
        message: "Please Login",
      });
      
    const decodedData = jwt.verify(token, process.env.Jwt_Sec);

    req.user = await User.findById(decodedData._id);

    next();
  } catch (error) {
    res.status(500).json({
      message: "Login First",
    });
  }
};

export const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "teacher")
      return res.status(403).json({
        message: "You are not admin",
      });

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const isTeacher = (req, res, next) => {
  try {
    // console.log(req.user.role)
    if (req.user.role !== "teacher")
      return res.status(403).json({
        message: "You are not teacher",
      });

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};