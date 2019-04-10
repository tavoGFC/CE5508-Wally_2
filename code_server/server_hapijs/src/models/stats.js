const mongoose = require('mongoose'); //cambiar es6

const Schema = mongoose.Schema;

const WallyStatsSchema = new Schema({
  leftScale: Number,
  rightScale: Number,
  amountCompression: Number,
  Month: String
});

export default mongoose.model('WallyStats', WallyStatsSchema);
