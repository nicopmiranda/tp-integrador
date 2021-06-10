/*
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const history = require('connect-history-api-fallback')

app = express()
// history middleware para que funcione la navegación
// por la API History de HTML5
app.use(history())
app.use(serveStatic(path.join(__dirname, 'dist')))

const port = process.env.PORT || 80
app.listen(port)
*/