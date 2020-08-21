require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    seederStorage: 'sequelize'
  }
}
