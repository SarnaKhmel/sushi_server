import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userPhone: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: false,
    },
    userAddress: {
      type: String,
      required: true,
    },
    orderPrice: {
      type: String,
      required: true,
    },
    orderWeight: {
      type: String,
      required: true,
    },
    orderList: {
      type: String,
      required: false,
    },
    orderPromo: {
      type: String,
      required: false,
    },
    orderStatus: {
      type: String,
      default: false,
    },
    viewsCount: {
      type: Number,
      required: true,
      default: 0,
    },
    imageUrl: String,
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
