import WallyUsers from '../../../models/users';

function usersRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/pruebaUsers',
      handler: function(request, h) {
        return '<h1>¡La Prueba Usuarios está funcionando!</h1>';
      }
    },
    {
      method: 'GET',
      path: '/api/v1/users/findOne',
      handler: function(request, reply) {
        const { email } = request.query;
        return WallyUsers.find({ email }, 'password');
      }
    },
    {
      method: 'GET',
      path: '/api/v1/users/allUsers',
      handler: function(request, reply) {
        return WallyUsers.find();
      }
    },
    {
      method: 'POST',
      path: '/api/v1/users/insert',
      handler: function(request, reply) {
        return (async () => {
          const { name, email, password } = request.payload;
          const user = new WallyUsers({
            name,
            email,
            password
          });
          try {
            await user.save();
            return reply.response('1');
          } catch (e) {
            return reply.response('0');
          }
        })();
      }
    }
  ]);
}

export default usersRoutes;
