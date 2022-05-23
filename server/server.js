require('dotenv').config();
const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const PORT = 5000;
const mongoose = require('mongoose');
const connectionURL = process.env.MONGO_URL;

mongoose
  .connect(connectionURL)
  .then(() => {
    console.log('Connecting with DB...');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.get('/', (req, res) => {
  res.send('hello');
});

// app.get('/users', (req, res) => {
//   res.send('users');
// });

app.listen(PORT, () => console.log(`Server ${PORT}`));
