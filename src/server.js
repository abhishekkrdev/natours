// Environment Configuration
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const server = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connection successful');
  });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
