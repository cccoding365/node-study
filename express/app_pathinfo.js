const express = require('express')
const path = require('path')
const app = express()

const template = require('art-template');

// view engine setup
app.engine('html', require('express-art-template'));
// 项目环境设置 production | development
app.set('view options', { debug: process.env.NODE_ENV !== 'production' });
// 设置html的文件目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板后缀名
app.set('view engine', 'html');



app.get('/list.html', (req, res) => {
  res.render('list')
})

app.get('/detail/:id', (req, res) => {
  const { params: { id } } = req
  res.send('列表项详情页面' + id)
})

template.defaults.imports.arrFilter = function (value) {
  if (value >= 18) {
    return value
  }
}
app.get('/', (req, res) => {
  let dataList = {
    name: '四大名著',
    num: 4,
    children: ['西游记', '三国演义', '水浒传', '红楼梦'],
    array: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  }
  res.render('index.html', dataList)
})


app.listen(3030, () => {
  console.log('express 启动成功！');
})