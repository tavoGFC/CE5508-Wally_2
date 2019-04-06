'use strict';

//import Hapi from 'hapi';
//import mongoose from 'mongoose';
//import statsRoutes from './api/v1/stats';

const server = Hapi.server({
  host: 'localhost',
  port: 8000
});

//statsRoutes(server);

const start = async function() {
  try {
    mongoose.connect(
      'mongodb+srv://admin:mongosaurio@trabajoenclase2-euwjk.mongodb.net/test?retryWrites=true',
      { userNewUrlParser: true }
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
