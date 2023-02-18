const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

const bodyParser = require('body-parser')
// false指定接收的值为字符串或者数组, true指定为任意类型
app.use(bodyParser.urlencoded({ extended: false }))
// 解析json格式
app.use(bodyParser.json())

// 获取静态资源
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('hello express')
})

app.get('/index.html', (req, res) => {
  let filePath = path.join(__dirname, 'views', 'index.html')
  let content = fs.readFileSync(filePath, 'utf-8')
  res.send(content)
})

app.get('/login.html', (req, res) => {
  let filePath = path.join(__dirname, 'views', 'login.html')
  let content = fs.readFileSync(filePath, 'utf-8')
  res.send(content)
})

// app.get('/register.html', (req, res) => {
//   let filePath = path.join(__dirname, 'views', 'register.html')
//   let content = fs.readFileSync(filePath, 'utf-8')
//   res.send(content)
// })

// app.post('/register.html', (req, res) => {
//   const { body: { username, email, password } } = req
//   console.log(username, email, password);
//   // 重定向
//   res.redirect('/login.html')
// })

// 使用all方法合并同一路径下的不同请求
app.all('/register.html', (req, res) => {
  const { method } = req
  if (method == 'GET') {
    let filePath = path.join(__dirname, 'views', 'register.html')
    let content = fs.readFileSync(filePath, 'utf-8')
    res.send(content)
  } else if (method == 'POST') {
    const { body: { username, email, password } } = req
    console.log(username, email, password);
    // 重定向
    res.redirect('/login.html')
  }
})


app.listen(3030, () => {
  console.log('express 启动成功！');
})