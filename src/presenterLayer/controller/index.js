"use strict";
const { setCntrl: setController } = require('./userSpecific/create.controller');
const { updateCntrl: updateController } = require('./userSpecific/update.controller');
const { getAllCntrl: getAllController } = require('./common/getAll.controller');
const { getAllByReceiverIdCntrl: getAllByReceiverIdController } = require('./common/getAllByReceiverId.controller');
const { getAllBySenderAndReceiverIdCntrl: getAllBySenderAndReceiverIdController } = require('./common/getAllBySenderAndReceiverId.controller');
const { getAllBySenderIdCntrl: getAllBySenderIdController } = require('./common/getAllBySenderId.controller');
const { getByChatIdCntrl: getByChatIdController } = require('./common/getById.controller');
const { blockByIdCntrl: blockByIdController } = require('./adminSpecific/block.controller');
const { unBlockByIdCntrl: unBlockByIdController } = require('./adminSpecific/unBlock.controller');
const { unVerifyByIdCntrl: unVerifyByIdController } = require('./adminSpecific/unVerify.controller');
const { verifyByIdCntrl: verifyByIdController } = require('./adminSpecific/verify.controller');
module.exports = {
    setController,
    updateController,
    getAllController,
    getAllByReceiverIdController,
    getAllBySenderAndReceiverIdController,
    getAllBySenderIdController,
    getByChatIdController,
    blockByIdController,
    unBlockByIdController,
    unVerifyByIdController,
    verifyByIdController
};
