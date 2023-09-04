const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/getEstablishmentDetails', (req, res) => {
  res.send('Hello World!')
})

app.post('/getEstablishmentDetails', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})