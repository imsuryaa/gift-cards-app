const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const port = process.env.PORT || 5000
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})