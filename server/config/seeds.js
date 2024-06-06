const db = require('./connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  // Clean existing data
  await cleanDB('User', 'users');

  // Create users
  const users = await User.insertMany([
    {
      username: 'pamela123',
      firstName: 'Pamela',
      lastName: 'Washington',
      email: 'pamela@testmail.com',
      password: 'password12345',
    },
    {
      username: 'elijah123',
      firstName: 'Elijah',
      lastName: 'Holt',
      email: 'eholt@testmail.com',
      password: 'password12345',
    },
  ]);

  console.log('Users seeded');

  process.exit();
});
