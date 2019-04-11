import WallyUsers from '../../../models/users';

function usersRoutes(server) {
    server.route([
        {
            method: 'GET',
            path: '/pruebaUsers',
            handler: function (request, h) {
                return '<h1>¡La Prueba Usuarios está funcionando!</h1>';
            }
        },
        {
            method: 'GET',
            path: '/api/v1/users/findOne',
            handler: function (request, reply) {
                if (request.query) {
                    const { email } = request.query;
                    return WallyUsers.find({ email}).select('password');
                }
                return WallyUsers.find();
            }
        },
        {
            method: 'GET',
            path: '/api/v1/allUsers',
            handler: function (request, reply) {
                return WallyUsers.find();
            }
        },
        {
            method: 'POST',
            path: '/api/v1/users/insert',
            handler: function (request, reply) {
                const { name, email, password } = request.payload;
                const user = new WallyUsers({
                    name,
                    email,
                    password
                });
                return user.save();
            }
        }
    ]);
}

export default usersRoutes;
