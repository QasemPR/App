const express = require('express')
const Connect = require('./configs')
const router = require('./routes')
const app = express()
require('dotenv').config()
app.use(express.json())

app.use('/', router)

Connect().then(() => {
    app.listen(8080, () => {
        setTimeout(() => {
            console.log("Server is Runing !")
        }, 500);

    })
})