import { Schema } from 'mongoose';



// <TruckDocument>
const TruckSchema = new Schema({
  ownerId: {
    type: String,
    required: true,
  },
  truckImage: {
    type: String,
  
  },
  truckNumber: {
      type: String,
      required: true
  },
  currentLocation: {
      type: String,
      required: true
  },
  truckType: {
      type: String,
      required: true
  },
  capacity: {
      type: Number,
      required: true
  },
  operatingStates: [{
      type: String
  }],
  activeStatus: {
      type: Boolean,
      default: true
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isVerified: {
    type: Boolean,
    default: false 
  },
  expiresAt: Date,  
}, { timestamps: true });

module.exports = {
    truckSchema: TruckSchema
};
