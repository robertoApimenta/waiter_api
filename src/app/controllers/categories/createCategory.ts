import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, icon } = req.body;

    const newCategory = await Category.create({ name, icon });
    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error', err });
  }
};
