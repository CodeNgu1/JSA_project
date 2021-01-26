const express = require('express')
const app = express()
const port = 3000
//địa chỉ trang web
app.get('/', (req, res) => {
  res.send('../HTML and CSS files/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})