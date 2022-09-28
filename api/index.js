const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoute = require('./routes/auth');

const app = express();
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connexion successfull'))
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);

app.listen(8800, () => {
  console.log('Backend server is running on port 8800');
});
