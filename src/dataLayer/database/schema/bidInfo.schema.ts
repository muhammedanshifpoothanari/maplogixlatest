import { Schema } from 'mongoose';



// <BidDocument>
const BidSchema = new Schema({
  loadId: {
    type: String,
  },
  truckId: {
    type: String,
  },
  userId: {
    type: String,
  },
  bidPrice: {
    type: Number,
   
  },
  chatId: {
    type: String,
  }
}, { timestamps: true });

module.exports = {
    bidSchema: BidSchema
};
