const express = require('express');
const cors = require('cors');
const adminRouter = require('./src/presenterLayer/router/adminRouter/index');
const userRouter = require('./src/presenterLayer/router/userRouter/index');
const { connect } =require('./src/dataLayer/database/mongo/mongoDb')
const app = express();

const dotenv = require('dotenv');
dotenv.config();
require('./src/presenterLayer/router/rabbitmq')
const PORT = process.env.PORT;

const start = () => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/', userRouter);
    app.use('/admin', adminRouter);


    app.listen(PORT, async () => {
        await connect();
        console.log(`Connected to server at port: ${PORT}`);
      
    });
};

module.exports = {
    start
};
