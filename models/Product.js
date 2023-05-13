import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    text: {
      type: String,
    },
    weight: {
      type: String,
    },
    sale: {
      type: String,
    },
    price: {
      type: String,
    },
    week_sale: {
      type: String,
      default: false,
    },
    old_price: {
      type: String,
    },
    viewsCount: {
      type: Number,
      required: true,
      default: 0,
    },
    imageUrl: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
