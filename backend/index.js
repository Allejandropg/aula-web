const port = 3001
const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

// console.log(db.connection())
app.db = db
consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)
    
app.listen(port,()=>{
    console.log(`Back rodando na porta ${port}`)
})