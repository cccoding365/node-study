// 抽取路由
const express = require('express')
// 创建路由对象
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const routerPort = express.Router()

routerPort.get('/index.html', (req, res) => {
  let filePath = path.join(__dirname, '../views', 'index.html')
  let content = fs.readFileSync(filePath, 'utf-8')
  res.send(content)
})

module.exports = routerPort
