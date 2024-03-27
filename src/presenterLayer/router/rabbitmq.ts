const amqp = require("amqplib");


const SendToQueue = async (text:any) => {
  const queue = "chat";
  let connection;
  try {
    connection = await amqp.connect("amqps://vqjyasvt:0Z_h6jS97osugWN16xN1kHFXlFe1RKXP@puffin.rmq2.cloudamqp.com/vqjyasvt");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(text)));
    console.log("[x] Sent '%s'", text);
    await channel.close();
  } catch (err) {
    console.warn(err);
  } finally {
    if (connection) await connection.close();
  }
}


module.exports = {
  SendToQueue
}



