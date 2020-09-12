const Fastify = require('fastify')
const server = Fastify()

server.register(require('fastify-http-proxy'), {
  upstream: 'https://www.google.com/',
})

server.listen(3500)
