import WallyStats from '../../../models/stats';

function statsRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/prueba',
      handler: function(request, h) {
        return '<h1>¡La Prueba está funcionando!</h1>';
      }
    },
    {
      method: 'GET',
      path: '/api/v1/allStats',
      handler: function(request, reply) {
        return WallyStats.find();
      }
    }
    /* {
      method: 'GET',
      path: '/api/v1/students/findOne',
      handler: function(request, reply) {
        if (request.query) {
          const { name } = request.query;
          return WallyStats.find({ name });
        }
        return WallyStats.find();
      }
    } */
    /* {
      method: 'POST',
      path: '/api/v1/students/d',
      handler: function(request, reply) {
        const { name, lastname, hobbie } = request.payload;
        const student = new WallyStats({
          name,
          lastname,
          hobbie
        });
        return student.save();
      }
    } */
  ]);
}

export default statsRoutes;
