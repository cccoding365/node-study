const http = require('http')
const url = require('url')
const port = 8080

const server = http.createServer((request, response) => {
  let { url: reqUrl, method } = request


  let parse = url.parse(reqUrl, true)
  console.log(parse);


  response.end('hello node.js')
})



server.listen(port, (error) => {
  if (error) {
    console.error(err)
    return
  }
  console.log(`服务器已启动在端口${port}`)
})