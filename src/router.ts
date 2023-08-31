import { Router } from 'express';
import { listCategories } from './app/controllers/categories/listCategories';
import { createCategory } from './app/controllers/categories/createCategory';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// creste categories
router.post('/categories', createCategory);

// list products
router.get('/products', (req, res) => {
  res.send('OK');
});

// list products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});
// create products
router.post('/products', (req, res) => {
  res.send('OK');
});

// list orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
