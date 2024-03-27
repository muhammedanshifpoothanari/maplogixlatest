const amqp = require("amqplib");

const queue = "chat";

export const Rabbits = async () => {
    try {
    
        
      const connection = await amqp.connect("amqps://vqjyasvt:0Z_h6jS97osugWN16xN1kHFXlFe1RKXP@puffin.rmq2.cloudamqp.com/vqjyasvt");
      const channel = await connection.createChannel();
  
      process.once("SIGINT", async () => {
        await channel.close();
        await connection.close();
      });
  
      await channel.assertQueue(queue, { durable: false });
  
      return new Promise((resolve) => {
        channel.consume(
          queue,
          (message: any) => {
            if (message) {
              console.log(" [x] Received '%s'", JSON.parse(message.content.toString()));
              resolve(true); 
            } else {
              resolve(false); 
            }
          }
        );
      });
  
    } catch (err) {
      console.warn(err);
      return false; // Return false if there's an error
    }
  };
  