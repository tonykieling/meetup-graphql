const express = require('express')
const cors = require('cors')
const port = 3333
const app = express()

app.use(cors())

app.use('/hello', (req, res, next) => {
  console.log("this is hello")
  res.send({message: "this is hello"})
  // next()
})

app.get ('/', (req, res) => {
  res.send("this is /")
})

app.listen(port, () => console.log(`Server running on port ${port}`))
