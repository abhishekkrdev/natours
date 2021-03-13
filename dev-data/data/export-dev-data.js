// Environment Configuration
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const fs = require('fs');

const Tour = require('../../src/models/tourModel');

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

// Read JSON File
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// Import Data Into DB
const exportData = async () => {
  try {
    await Tour.create(tours);
    console.log('Tour Data Exported Successfully');
  } catch (err) {
    console.log(err);
  }
};

// Delete All Data from DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Tour Data Successfully Deleted');
  } catch (err) {
    console.log(err);
  }
};

// Writing Command Line Codes
if (process.argv[2] === '--export') {
  exportData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
