const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.lastest([config])
module.exports = knex