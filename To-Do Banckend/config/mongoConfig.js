const mongoose = require('mongoose');

const mongoConfig = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.jmnkad8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // You might want to handle this error in your application
  }
};

module.exports = mongoConfig;
 
