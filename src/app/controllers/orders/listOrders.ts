import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export const listOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');

    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error', err });
  }
};
