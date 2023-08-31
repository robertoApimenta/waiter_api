import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export const createProduct = async (req: Request, res: Response) => {

  try {
    const imagePath = req.file?.filename;
    const { name, description, price, ingredients, category } = req.body;
    // console.log(JSON.parse(ingredients));
    const newProduct = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category
    });
    return res.status(201).json(newProduct);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error', err });
  }
};
