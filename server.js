import express from 'express';
import dotenv from 'dotenv';
import Login from './controllers/Login.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/Login', Login);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
