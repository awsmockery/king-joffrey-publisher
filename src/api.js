const express = require('express')
const app = express()
const queue = require('./queue')
const port = 8001

app.post('/createMessage', ({ body }, response) => {
  queue.createMessage((result)=> {
    response.send(result)
  })
})
app.listen(port, () => console.log(`King Joffrey listening on port${port}!`))
