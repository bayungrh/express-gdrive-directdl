/*!
 * Google Drive Direct Download
 * https://github.com/MuhBayu/express-gdrive-directdl
 */
const express = require('express')
const app = express(), port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const path = require('path')
const public_path = path.join(__dirname+'/public/')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
})

var routes = require('./routes/web')
routes(app, public_path)

var server = app.listen(port, function () {
   var host = server.address().address
   console.log("Server started on http://%s:%s", host, port)
})