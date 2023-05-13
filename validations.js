import { body } from "express-validator";

export const registerValidation = [
  body("email", "bad email").isEmail(),
  body("password", "bad pass").isLength({ min: 6 }),
  body("fullName", "bad name").isLength({ min: 3 }),
  body("avatarUrl", "bad url").optional().isURL(),
];

export const loginValidation = [
  body("email", "bad email").isEmail(),
  body("password", "bad pass").isLength({ min: 6 }),
];

export const postCreateValidation = [
  body("title", "bad title").isLength({ min: 3 }).isString(),
  body("text", "bad text").isLength({ min: 3 }).isString(),
  body("imageUrl", "bad image url ").optional().isString(),
];

export const productCreateValidation = [
  body("name", "bad name").isLength({ min: 3 }).isString(),
  body("text", "bad name").isLength({ min: 3 }).isString(),
  body("weight", "bad name").isString(),
  body("sale", "bad name").isBoolean(),
  body("price", "bad name").isString(),
  body("week_sale", "bad week_sale").isBoolean(),
  body("old_price", "bad name").optional().isLength({ min: 1 }).isString(),
  body("imageUrl", "bad image url ").optional().isString(),
];

// name
// text
// type

// sale
// weight
// price
// week_sale

// old_price
// viewsCount

// imageUrl
// user
// createdAt
// updatedAt
