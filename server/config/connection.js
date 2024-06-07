const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Rashuneagle:Password@cluster0.uv90nhx.mongodb.net/MERN-BOOKS?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose.connection;
