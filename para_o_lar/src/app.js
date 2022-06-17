//CONFIGURAÇÃO DE APLICAÇÃO
const express = require('express')
//Requerir e habilitar o env
require('dotenv').config()
const cors = require('cors')

const db = require('./database/mongooseConnect')

const app = express()

app.use(express.json())
app.use(cors())
db.connect()

module.exports = app