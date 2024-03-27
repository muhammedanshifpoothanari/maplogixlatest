import { Schema } from 'mongoose';


const LoadSchema = new Schema({
  loadName: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
  },
  loadType: {
    type: String,
    required: true
  },
  startingPoint: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  boxSize: {
    type: String,
    required: true
  },
  loadWeight: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  pricePerUnit: {
    type: Number,
    required: true
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
},{timestamps: true});

module.exports = {
    loadSchema: LoadSchema
};
