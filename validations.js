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
  body("text", "bad text").isLength({ min: 3 }).isString(),
  body("weight", "bad weight").isString(),
  body("sale", "bad sale").isBoolean(),
  body("price", "bad price").isString(),
  body("week_sale", "bad week_sale").optional().isString(),
  body("old_price", "bad old_price").optional().isLength({ min: 1 }).isString(),
  body("imageUrl", "bad image url ").optional().isString(),
];

export const ordersCreateValidation = [
  body("userName", "bad userName").isLength({ min: 3 }).isString(),
  body("userPhone", "bad userPhone").isLength({ min: 3 }).isString(),
  body("userEmail", "bad userEmail").isLength({ min: 3 }).isString(),
  body("userAddress", "bad userAddress").isObject(),

  body("orderPrice", "bad orderPrice").isString(),
  body("orderWeight", "bad orderWeight").isString(),
  body("orderList", "bad orderList").isArray(),
  body("orderPromo", "bad orderPromo").optional().isString(),
  body("orderStatus", "bad orderStatus").optional().isString(),
];
