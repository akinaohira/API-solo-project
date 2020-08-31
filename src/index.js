const express = require('express')
const app = express()

const PORT = 3000;
app.get('/hello', (_, res) => res.send('Hello World!'))


// get all dogs information
app.get('/inuzu/', (req, res) => {
  res.send()
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
