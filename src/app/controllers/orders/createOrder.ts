import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { table, products } = req.body;
    const newOrder = await Order.create({
      table,
      products,
    });
    return res.status(201).json(newOrder);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error', err });
  }
};
