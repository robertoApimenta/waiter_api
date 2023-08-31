import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export const changeOrder = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const { orderId } = req.params;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({ message: 'Status incorreto' });
    }

    await Order.findByIdAndUpdate(orderId, { status });
    return res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error', err });
  }
};
