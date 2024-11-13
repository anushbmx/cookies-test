import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
 
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const hostname = "test.swoogo.stream";
const app = next({ dev, hostname })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url || "", true)
    handle(req, res, parsedUrl)
  }).listen(port)
 
  console.log(
    `> Server listening at http://${hostname}:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})