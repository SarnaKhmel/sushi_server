import { json } from "express";
import ProductModel from "../models/Product.js";

export const getAll = async (req, res) => {
  try {
    const Products = await ProductModel.find().populate("user").exec();
    res.json(Products);
  } catch (error) {
    console.log(error);
    res.status(500),
      json({
        message: "Cant find Products",
      });
  }
};

export const getOne = async (req, res) => {
  try {
    const ProductId = req.params.id;
    const doc = await ProductModel.findOneAndUpdate(
      {
        _id: ProductId,
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
        message: "Error, cant found Product",
      });
    }

    res.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cant find Products",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new ProductModel({
      name: req.body.name,
      text: req.body.text,
      weight: req.body.weight,
      sale: req.body.sale,
      price: req.body.price,
      week_sale: req.body.week_sale,
      old_price: req.body.old_price,
      imageUrl: req.body.imageUrl,
      user: req.userId,
    });

    const Product = await doc.save();
    res.json(Product);
  } catch (error) {
    console.log(error);
    res.status(500),
      json({
        message: "Cant create Product",
      });
  }
};

export const remove = async (req, res) => {
  try {
    const ProductId = req.params.id;
    const doc = await ProductModel.findOneAndDelete({
      _id: ProductId,
    });

    if (!doc) {
      return res.status(404).json({
        message: "Error, cant found Product",
      });
    }

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cant remove Products",
    });
  }
};

export const update = async (req, res) => {
  try {
    const ProductId = req.params.id;
    const doc = await ProductModel.updateOne(
      {
        _id: ProductId,
      },
      {
        name: req.body.name,
        text: req.body.text,
        weight: req.body.weight,
        sale: req.body.sale,
        price: req.body.price,
        week_sale: req.body.week_sale,
        old_price: req.body.old_price,
        imageUrl: req.body.imageUrl,
        user: req.userId,
      }
    );
    res.json(doc);
  } catch (error) {
    res.status(500).json({
      message: "Cant update Product",
    });
  }
};
