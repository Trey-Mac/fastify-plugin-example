export default async function plugin(fastify, options) {
  fastify.get('/', async function (request, reply) {
    reply
      .header('Content-Type', 'text/html')
      .send(`<html><body><img src="https://cataas.com/cat"></img></body></html>`);
  });
}
