"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// <BidDocument>
const BidSchema = new mongoose_1.Schema({
    loadId: {
        type: String,
        required: true
    },
    truckId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    bidPrice: {
        type: Number,
        required: true
    },
    chatId: {
        type: String,
    }
}, { timestamps: true });
module.exports = {
    bidSchema: BidSchema
};
