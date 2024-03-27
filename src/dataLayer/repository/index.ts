const {blockLoadById: blockLoadByIdRepo } = require('./adminSpecifcRepo/block.repo');
const {unBlockLoadById: unBlockLoadByIdRepo } = require('./adminSpecifcRepo/unBlock.repo');
const {unVerifyLoadById: unVerifyLoadByIdRepo } = require('./adminSpecifcRepo/unVerify.repo');
const {verifyLoadById: verifyLoadByIdRepo } = require('./adminSpecifcRepo/verify.repo');

const { getAll: getAllRepo } = require('./commonRepo/getAll.repo');
const { getAllByLoadName: getAllByLoadNameRepo } = require('./commonRepo/getAllByLoadName.repo');
const {getAllByLoadType: getAllByLoadTypeRepo } = require('./commonRepo/getAllByLoadType.repo');
const {getAllByOwnerId : getAllByOwnerIdRepo } = require('./commonRepo/getAllByOwnerId.repo');
const {getAllByStartingPoint: getAllByStartingPointRepo } = require('./commonRepo/getAllByStartingPoint.repo');
const {getAllByWeight: getAllByWeightRepo } = require('./commonRepo/getAllByWeight.repo');
const {getByLoadId: getByLoadIdRepo } = require('./commonRepo/getById.repo');

const {createLoad: createLoadRepo } = require('./userSpecificRepo/set.repo');
const {updateLoad: updateLoadRepo } = require('./userSpecificRepo/update.repo');

module.exports = {
    blockLoadByIdRepo,
    unBlockLoadByIdRepo,
    unVerifyLoadByIdRepo,
    verifyLoadByIdRepo,
    getAllRepo,
    getAllByLoadNameRepo,
    getAllByLoadTypeRepo,
    getAllByOwnerIdRepo,
    getAllByStartingPointRepo,
    getAllByWeightRepo,
    getByLoadIdRepo,
    createLoadRepo,
    updateLoadRepo
}
