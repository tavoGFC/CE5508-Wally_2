import WallyStats from '../../../models/stats';

function statsRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/pruebaStats',
      handler: function(request, h) {
        return '<h1>¡La Prueba Stats está funcionando!</h1>';
      }
    },
    {
      method: 'GET',
      path: '/api/v1/stats/allStats',
      handler: function(request, reply) {
        return WallyStats.find();
      }
    },
    {
      method: 'GET',
      path: '/api/v1/stats/newestStats',
      handler: function(request, reply) {
        return WallyStats.findOne().sort({ _id: -1 });
      }
    },
    {
      method: 'POST',
      path: '/api/v1/stats/insert',
      handler: function(request, reply) {
        const { leftScale, rightScale } = request.payload;
        var months = [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Deciembre'
        ];
        var now = new Date();
        var thisMonth = months[now.getMonth()];
        const stats = new WallyStats({
          leftScale,
          rightScale,
          Month: thisMonth
        });
        return stats.save();
      }
    }
  ]);
}

export default statsRoutes;
