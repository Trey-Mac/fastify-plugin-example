export default async function plugin(fastify, options) {
  fastify.get('/', async function (request, reply) {
    return { key: 'value' };
  });
}
