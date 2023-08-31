import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/controllers/categories/listCategories';
import { createCategory } from './app/controllers/categories/createCategory';
import { listProducts } from './app/controllers/products/listProducts';
import { listProductsByCategorie } from './app/controllers/products/listProductsByCategorie';
import { createProduct } from './app/controllers/products/createProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),
});

// List categories
router.get('/categories', listCategories);

// creste categories
router.post('/categories', createCategory);

// list products
router.get('/products', listProducts);

// list products by category
router.get('/categories/:categoryId/products', listProductsByCategorie);
// create products
router.post('/products', upload.single('image'), createProduct);

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
