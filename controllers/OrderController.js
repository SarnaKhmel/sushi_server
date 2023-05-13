import { json } from "express";
import OrderModel from "../models/Order.js";

export const getAll = async (req, res) => {
  try {
    const Orders = await OrderModel.find().populate("user").exec();
    res.json(Orders);
  } catch (error) {
    console.log(error);
    res.status(500),
      json({
        message: "Cant find Orders",
      });
  }
};

export const getOne = async (req, res) => {
  try {
    const OrderId = req.params.id;
    const doc = await OrderModel.findOneAndUpdate(
      {
        _id: OrderId,
      },
      {
        $inc: {
          viewsCount: 1,
        },
      },
      {
        returnDocument: "after",
      }
    );

    if (!doc) {
      return res.status(404).json({
        message: "Error, cant found Order",
      });
    }

    res.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cant find Orders",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new OrderModel({
      userName: req.body.userName,
      userPhone: req.body.userPhone,
      userEmail: req.body.userEmail,
      userAddress: req.body.userAddress,

      orderPrice: req.body.orderPrice,
      orderWeight: req.body.orderWeight,
      orderList: req.body.orderList,
      orderPromo: req.body.orderPromo,
      orderPromo: req.body.orderPromo,
      orderStatus: req.body.orderStatus,
    });

    const Order = await doc.save();
    res.json(Order);
  } catch (error) {
    console.log(error);
    res.status(500),
      json({
        message: "Cant create Order",
      });
  }
};

export const remove = async (req, res) => {
  try {
    const OrderId = req.params.id;
    const doc = await OrderModel.findOneAndDelete({
      _id: OrderId,
    });

    if (!doc) {
      return res.status(404).json({
        message: "Error, cant found Order",
      });
    }

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cant remove Orders",
    });
  }
};

export const update = async (req, res) => {
  try {
    const OrderId = req.params.id;
    const doc = await OrderModel.updateOne(
      {
        _id: OrderId,
      },
      {
        userName: req.body.userName,
        userPhone: req.body.userPhone,
        userEmail: req.body.userEmail,
        userAddress: req.body.userAddress,

        orderPrice: req.body.orderPrice,
        orderWeight: req.body.orderWeight,
        orderList: req.body.orderList,
        orderPromo: req.body.orderPromo,
        orderPromo: req.body.orderPromo,
        orderStatus: req.body.orderStatus,
      }
    );
    res.json(doc);
  } catch (error) {
    res.status(500).json({
      message: "Cant update Order",
    });
  }
};
