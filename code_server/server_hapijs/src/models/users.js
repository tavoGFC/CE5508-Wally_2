const mongoose = require('mongoose'); //cambiar es6

const Schema = mongoose.Schema;

const WallyUsersSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String
});

export default mongoose.model('WallyUsers', WallyUsersSchema);
