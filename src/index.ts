import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const PORT = 3001;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT} 🔥`);
    });
  })
  .catch((err) => console.log(err));
