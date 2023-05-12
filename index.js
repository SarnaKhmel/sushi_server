import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import cors from "cors";
import {
  registerValidation,
  loginValidation,
  postCreateValidation,
} from "./validations.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import { UserController, PostController } from "./controllers/index.js";

mongoose
  .connect(
    "mongodb+srv://admin:NDQtU8psAZpxqmL9@crud.phfcxck.mongodb.net/sushi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Success connect DB! 👍");
  })
  .catch((err) => {
    console.log("Error connecting DB((( 😥 ", err);
  });

const app = express();
const port = process.env.PORT || 1234;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// Admin routes
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.get("/auth/me", checkAuth, UserController.getMe);

//Post
app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.post(
  "/auth/posts",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.create
);
app.delete("/auth/posts/:id", checkAuth, PostController.remove);
app.patch(
  "/auth/posts/:id",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update
);

app.get("/", (req, res) => {
  res.send(`Server is OK 🤌🤘 
  <br/>
  <br/> PRIVATE routes
  <br/> /auth/register - POST - register-admin,
  <br/> /auth/login - POST - login-admin,
  <br/> /auth/me - GET - info-admin 
  <br/>
  <br/> /auth/posts - POST - create-post
  <br/> /auth/posts/:id - PATCH - update-post
  <br/> /auth/posts/:id - DELETE - delete-post
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/> PUBLIC routes
  <br/>
  <br/> /posts - GET - get-posts
  <br/> /posts/:id - GET - get-one-posts
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  
  `);
});
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server OK! Nice! ${port}`);
});
