export default async function plugin(fastify, options) {
  fastify.get('/', async function (request, reply) {
    return `
<html>
<body>
  <img src="https://cataas.com/cat"></img>
</body>
</html>`;
  });
}
