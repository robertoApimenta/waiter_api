import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export const listCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error', err });
  }
};
