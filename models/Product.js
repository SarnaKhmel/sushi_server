import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    weight: {
      type: Boolean,
      required: true,
    },
    sale: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    week_sale: {
      type: Boolean,
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
