"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const amqp = require("amqplib");
const SendToQueue = (text) => __awaiter(void 0, void 0, void 0, function* () {
    const queue = "chat";
    let connection;
    try {
        connection = yield amqp.connect("amqps://vqjyasvt:0Z_h6jS97osugWN16xN1kHFXlFe1RKXP@puffin.rmq2.cloudamqp.com/vqjyasvt");
        const channel = yield connection.createChannel();
        yield channel.assertQueue(queue, { durable: false });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(text)));
        console.log("[x] Sent '%s'", text);
        yield channel.close();
    }
    catch (err) {
        console.warn(err);
    }
    finally {
        if (connection)
            yield connection.close();
    }
});
module.exports = {
    SendToQueue
};
