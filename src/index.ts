import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(router);
    const PORT = 3001;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT} 🔥`);
    });
  })
  .catch((err) => console.log(err));
