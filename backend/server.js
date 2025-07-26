import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import "./Modules/db.js";
import cors from 'cors';
import bodyParser from 'body-parser';

import AuthRouter from './Routes/AuthRouter.js';
import connectDB from './Modules/db.js';

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(cors({
  origin: 'https://tutedude-bazaar-link.vercel.app', 
  credentials: true
}));
app.use(bodyParser.json());

app.use('/auth', AuthRouter);

app.get('/', (req, res) => {
  res.send('Hello from bazaarlink backend!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const SELF_URL = 'https://tutedude-bazaarlink.onrender.com';

if (process.env.NODE_ENV === 'production') {
  setInterval(() => {
    fetch(SELF_URL)
      .then(res => console.log(`[KEEP-ALIVE] Pinged ${SELF_URL} | Status: ${res.status}`))
      .catch(err => console.error(`[KEEP-ALIVE] Error pinging: ${err.message}`));
  }, 14 * 60 * 1000); 
}