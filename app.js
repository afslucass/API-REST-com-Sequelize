const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { router } = require('./routes/router')

app.use(bodyParser.json())
app.use(router)

app.listen(3000, () => {
    console.log('It is all ok')
})