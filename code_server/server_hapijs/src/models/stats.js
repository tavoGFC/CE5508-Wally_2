const mongoose = require('mongoose'); //cambiar es6

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  leftScale: Number,
  rightScale: Number,
  amountCompression: Number,
  Month: String
});

export default mongoose.model('WallyStats', StudentSchema);
