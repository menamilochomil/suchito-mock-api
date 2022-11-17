const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log('JSON Server is running')
})


//Aquí comienzan la prueba de auth link: https://www.npmjs.com/package/json-server-auth

// const jsonServer = require('json-server')
// const auth = require('json-server-auth')

// const app = jsonServer.create()
// const router = jsonServer.router('db.json')

// // /!\ Bind the router db to the app
// app.db = router.db

// // You must apply the auth middleware before the router
// app.use(auth)
// app.use(router)
// app.listen(3000)