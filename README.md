# Fastify

const Fastify = require('fastify')
const server = Fastify()

server.register(require('fastify-http-proxy'), {
  upstream: 'https://www.google.com/',
})

server.listen(3500)

This will proxy any request starting with /api to http://www.google.com/. For instance http://localhost:3500 will be proxied to http://www.google.com
