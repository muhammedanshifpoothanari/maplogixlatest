const getAllUseCase = require('./common/getAll.useCase');
const getAllByTruckTypeUseCase = require('./common/getAllByTruckType.useCase');
const getAllByOwnerIdUseCase = require('./common/getAllByOwnerId.useCase');
const getAllByStartingPointUseCase = require('./common/getAllByStartingPoint.useCase');
const getAllByWeightUseCase = require('./common/getAllByWeight.useCase');
const getByTruckIdUseCase = require('./common/getById.useCase');

const createUseCase = require('./userSpecific/create.useCase');
const updateUseCase = require('./userSpecific/update.useCase');

const blockUseCase = require('./adminSpecific/block.useCase');
const unBlockUseCase = require('./adminSpecific/unBlock.useCase');
const unVerifyUseCase = require('./adminSpecific/unVerify.useCase');
const verifyUseCase = require('./adminSpecific/verify.useCase');

module.exports = {
    getAllUseCase,
    getAllByTruckTypeUseCase,
    getAllByOwnerIdUseCase,
    getAllByStartingPointUseCase,
    getByTruckIdUseCase,
    getAllByWeightUseCase,
    createUseCase,
    updateUseCase,
    blockUseCase,
    unBlockUseCase,
    unVerifyUseCase,
    verifyUseCase
}