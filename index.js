const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static((__dirname + '/')))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.use(express.static(__dirname + '/'));
