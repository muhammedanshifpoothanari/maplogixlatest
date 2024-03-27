const {blockTruckById: blockTruckByIdRepo } = require('./adminSpecifcRepo/block.repo');
const {unBlockTruckById: unBlockTruckByIdRepo } = require('./adminSpecifcRepo/unBlock.repo');
const {unVerifyTruckById: unVerifyTruckByIdRepo } = require('./adminSpecifcRepo/unVerify.repo');
const {verifyTruckById: verifyTruckByIdRepo } = require('./adminSpecifcRepo/verify.repo');

const { getAll: getAllRepo } = require('./commonRepo/getAll.repo');
const {getAllByLoadId : getAllByLoadIdRepo } = require('./commonRepo/getAllByLoadId.repo');
const {getAllByTruckId : getAllByTruckIdRepo } = require('./commonRepo/getAllByTruckId.repo');
const {getAllByUserId : getAllByUserIdRepo } = require('./commonRepo/getAllByUserId.repo');
const {getByBidId : getAllByBidIdRepo } = require('./commonRepo/getById.repo');


const {createBid: createBidRepo } = require('./userSpecificRepo/set.repo');
const {updateBid: updateBidRepo } = require('./userSpecificRepo/update.repo');

module.exports = {
    blockTruckByIdRepo,
    unBlockTruckByIdRepo,
    unVerifyTruckByIdRepo,
    verifyTruckByIdRepo,
    getAllRepo,
    getAllByLoadIdRepo,
    getAllByUserIdRepo,
    getAllByTruckIdRepo,
    getAllByBidIdRepo,
    createBidRepo,
    updateBidRepo
}
