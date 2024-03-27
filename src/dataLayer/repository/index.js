"use strict";
const { blockSenderAndRecieverById: blockSenderAndRecieverByIdRepo } = require('./adminSpecifcRepo/block.repo');
const { unBlockSenderAndRecieverById: unBlockSenderAndRecieverByIdRepo } = require('./adminSpecifcRepo/unBlock.repo');
const { unVerifySenderAndRecieverById: unVerifySenderAndRecieverByIdRepo } = require('./adminSpecifcRepo/unVerify.repo');
const { verifySenderAndRecieverById: verifySenderAndRecieverByIdRepo } = require('./adminSpecifcRepo/verify.repo');
const { getAll: getAllRepo } = require('./commonRepo/getAll.repo');
const { getAllByReceiverId: getAllByReceiverIdRepo } = require('./commonRepo/getAllByReceiverId.repo');
const { getAllBySenderAndReceiverId: getAllBySenderAndRecieverIdRepo } = require('./commonRepo/getAllBySenderAndRecieverId.repo');
const { getAllBySenderId: getAllBySenderIdRepo } = require('./commonRepo/getAllBySenderId.repo');
const { getByChatId: getAllByChatIdRepo } = require('./commonRepo/getById.repo');
const { createChat: createChatRepo } = require('./userSpecificRepo/set.repo');
const { updateChat: updateChatRepo } = require('./userSpecificRepo/update.repo');
module.exports = {
    blockSenderAndRecieverByIdRepo,
    unBlockSenderAndRecieverByIdRepo,
    unVerifySenderAndRecieverByIdRepo,
    verifySenderAndRecieverByIdRepo,
    getAllRepo,
    getAllByReceiverIdRepo,
    getAllBySenderIdRepo,
    getAllBySenderAndRecieverIdRepo,
    getAllByChatIdRepo,
    createChatRepo,
    updateChatRepo
};
