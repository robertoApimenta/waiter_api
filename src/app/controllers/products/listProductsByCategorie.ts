import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export const listProductsByCategorie = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.find().where('category').equals(categoryId);
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error', err });
  }
};
