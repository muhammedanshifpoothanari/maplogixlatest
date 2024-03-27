"use strict";
const { setCntrl: setController } = require('./userSpecific/create.controller');
const { updateCntrl: updateController } = require('./userSpecific/update.controller');
const { getAllCntrl: getAllController } = require('./common/getAll.controller');
const { getAllByUserIdCntrl: getAllByUserIdController } = require('./common/getAllByUserId.controller');
const { getAllByTruckIdCntrl: getAllByTruckIdController } = require('./common/getAllByTruckId.controller');
const { getAllByLoadIdCntrl: getAllByLoadIdController } = require('./common/getAllByLoadId.controller');
const { getByBidIdCntrl: getByBidIdController } = require('./common/getById.controller');
const { blockByIdCntrl: blockByIdController } = require('./adminSpecific/block.controller');
const { unBlockByIdCntrl: unBlockByIdController } = require('./adminSpecific/unBlock.controller');
const { unVerifyByIdCntrl: unVerifyByIdController } = require('./adminSpecific/unVerify.controller');
const { verifyByIdCntrl: verifyByIdController } = require('./adminSpecific/verify.controller');
module.exports = {
    setController,
    updateController,
    getAllController,
    getAllByUserIdController,
    getAllByTruckIdController,
    getAllByLoadIdController,
    getByBidIdController,
    blockByIdController,
    unBlockByIdController,
    unVerifyByIdController,
    verifyByIdController
};
