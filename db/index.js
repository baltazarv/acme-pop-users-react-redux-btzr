const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_pop_users_react_redux');

const User = conn.define('user', {
  name: Sequelize.STRING,
  rating: Sequelize.INTEGER
})

const sync = () => {
  return conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    User.create({ name: 'Mizaru', rating: 8 }),
    User.create({ name: 'Mikazaru', rating: 10 }),
    User.create({ name: 'Mazaru', rating: 2 })
  ])
}

module.exports = {
  sync,
  seed,
  models: {
    User
  }
}
