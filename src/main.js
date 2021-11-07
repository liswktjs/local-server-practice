//@ts-check
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('list of post')
  } else if (req.url && /^\/posts\/[a-zA-Z0-9-_]+$/.test(req.url)) {
    res.statusCode = 200
    res.end('Some Content of the post')
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('creating post')
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
  res.statusCode = 200
  res.end('Hell0')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log('This server is work!')
})
