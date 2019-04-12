import Hapi from 'hapi';
import mongoose from 'mongoose';
import statsRoutes from './api/v1/stats';
import usersRoutes from './api/v1/users';

const server = Hapi.server({
  host: '10.10.10.228',
  port: 8000
});

statsRoutes(server);
usersRoutes(server);

const start = async function() {
  try {
    mongoose.connect(
      'mongodb+srv://gustavo:admin123@cluster0-mhf6p.mongodb.net/test?retryWrites=true'
      //'mongodb+srv://admin:mongosaurio1@wallydb-emilc.mongodb.net/test?retryWrites=true'
    );
    mongoose.connection.once('open', () => {
      console.log('connected to database');
    });

    //mqtt

    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
