"use strict";
const getAllUserAbs = require('./common/getAll.useCase');
const getAllByNameUserAbs = require('./common/getAllByName.useCase');
const getAllByStateUseCaseAbs = require('./common/getAllByState.useCase');
const getAllByTypeUserAbs = require('./common/getAllByType.useCase');
const getAllByIdUserAbs = require('./common/getById.useCase');
const isAdminUserAbs = require('./common/isAdmin.useCase');
const blockByIdUserAbs = require('./adminSpecificUseCase/blockUserById.useCase');
const unBlockByIdUserAbs = require('./adminSpecificUseCase/unBlockUserById.useCase');
const unVerifyByIdUserAbs = require('./adminSpecificUseCase/unVerifyUserById.useCase');
const verifyByIdUserAbs = require('./adminSpecificUseCase/verifyUserById.useCase');
const setAdminByEmailUserAbs = require('./adminSpecificUseCase/setAdminUserByEmail.useCase');
const autheriseAbs = require('./userSpecificUseCase/autheriseUser.useCase');
const createAbs = require('./userSpecificUseCase/createUser.useCase');
const updateAbs = require('./userSpecificUseCase/updateUser.useCase');
module.exports = {
    getAllUserAbs,
    getAllByNameUserAbs,
    getAllByStateUseCaseAbs,
    getAllByTypeUserAbs,
    getAllByIdUserAbs,
    isAdminUserAbs,
    blockByIdUserAbs,
    unBlockByIdUserAbs,
    unVerifyByIdUserAbs,
    verifyByIdUserAbs,
    setAdminByEmailUserAbs,
    autheriseAbs,
    createAbs,
    updateAbs
};
