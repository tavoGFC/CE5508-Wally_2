const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  leftScale: Number,
  rightScale: Number,
  amountCompression: Number,
  Month: String
});

export default mongoose.model('WallyStats', StudentSchema);
