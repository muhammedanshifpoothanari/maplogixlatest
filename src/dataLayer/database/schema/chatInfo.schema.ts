import { Schema } from 'mongoose';



// <ChatDocument>
const ChatSchema = new Schema({
  senderId: {
    type: String,
    required: true
  },
  receiverId: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
}, { timestamps: true });

module.exports = {
  chatSchema: ChatSchema
};
