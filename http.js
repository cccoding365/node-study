const http = require('http')
const port = 8080

const server = http.createServer((request, response) => {
  let { url, method } = request
  console.log(url, method);
  response.end('hello node.js')
})

server.listen(port, (error) => {
  if (error) {
    console.error(err)
    return
  }
  console.log(`服务器已启动在端口${port}`)
})