const express = require('express')
const app = express()

const routerPort = require('./routes/passport')
app.use(routerPort)

app.get('/', (req, res) => {
  res.send('hello express')
})

app.listen(3030, () => {
  console.log('express 启动成功！');
})