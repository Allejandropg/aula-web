const config = require('../knexfile.js')
const knex = require('knex')(config)
try{
    knex.migrate.latest([config])
    module.exports = knex
}catch(err){
    console.error(err)
}