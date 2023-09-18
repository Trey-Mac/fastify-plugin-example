export default async function plugin() {
  fastify.get('/plugin', async (request, reply) => {
    return { key: 'value' };
  });
}
