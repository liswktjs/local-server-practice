//@ts-check
const http = require('http')

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/
  const postIdRegaxResult =
    (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined

  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('list of post')
  } else if (postIdRegaxResult) {
    // GET /posts/lid
    const postId = postIdRegaxResult[1]
    console.log(postId)

    res.statusCode = 200
    res.end(`${postId} content of the post`)
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
