const {getAllCntrl: getAllCntrlAbs } = require('./common/getAll.controller');
const {getAllByNameCntrl: getAllByNameCntrlAbs } = require('./common/getAllByName.controller');
const {getAllByStateCntrl: getAllByStateCntrlAbs } = require('./common/getAllByStateUseCase.controller');
const {getAllByTypeCntrl: getAllByTypeCntrlAbs } = require('./common/getAllByType.controller');
const {getByIdCntrl: getByIdCntrlAbs } = require('./common/getById.controller');
const {isAdminCntrl: isAdminCntrlAbs } = require('./common/isAdmin.controller');

const {blockByIdCntrl: blockByIdCntrlAbs } = require('./adminSpecific/blockById.controller');
const {setByEmailCntrl: setByEmailCntrlAbs } = require('./adminSpecific/setAdminByEmail.controller');
const {unBlockByIdCntrl: unBlockByIdCntrlAbs } = require('./adminSpecific/unBlockById.controller');
const {unVerifyByIdCntrl: unVerifyByIdCntrlAbs } = require('./adminSpecific/unVerifyById.controller');
const {verifyByIdCntrl: verifyByIdCntrlAbs } = require('./adminSpecific/verifyById.controller');


const {setCntrl: setCntrlAbs } = require('./userSpecific/create.controller');
const {updateCntrlForRabbitMQ: updateCntrlAbs } = require( './userSpecific/update.controller');

module.exports = {
    getAllCntrlAbs,
    getAllByNameCntrlAbs,
    getAllByStateCntrlAbs,
    getAllByTypeCntrlAbs,
    getByIdCntrlAbs,
    isAdminCntrlAbs,
    blockByIdCntrlAbs,
    setByEmailCntrlAbs,
    unBlockByIdCntrlAbs,
    unVerifyByIdCntrlAbs,
    verifyByIdCntrlAbs,
    setCntrlAbs,
    updateCntrlAbs
}