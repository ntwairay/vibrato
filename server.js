import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './routers/router.js';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/pallet');

// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use vibratoapi as prefix API endpoints
app.use('/vibratoapi', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
