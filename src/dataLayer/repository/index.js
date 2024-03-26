"use strict";
const { getAll: getAllAbs } = require('./commonRepo/getAll.repo');
const { getAllByName: getAllByNameAbs } = require('./commonRepo/getAllByName.repo');
const { getAllByState: getAllByStateAbs } = require('./commonRepo/getAllByState.repo');
const { getAllByType: getAllByTypeAbs } = require('./commonRepo/getAllByType.repo');
const { getById: getByIdAbs } = require('./commonRepo/getById.repo');
const { isAdmin: isAdminAbs } = require('./commonRepo/isAdmin.repo');
const { blockUserById: blockUserByIdAbs } = require('./adminSpecificRepo/block.repo');
const { unBlockUserById: unBlockUserByIdAbs } = require('./adminSpecificRepo/unBlock.repo');
const { unVerifyUserById: unVerifyUserByIdAbs } = require('./adminSpecificRepo/unVerify.repo');
const { verifyUserById: verifyUserByIdAbs } = require('./adminSpecificRepo/verify.repo');
const { setAdminUserByEmail: setAdminUserByEmailAbs } = require('./adminSpecificRepo/setAdmin.repo');
const { AutheriseUser: autheriseUserAbs } = require('./userSpecificRepo/autherisation.repo');
const { createUser: createUserAbs } = require('./userSpecificRepo/set.repo');
const { updateUser: updateUserAbs } = require('./userSpecificRepo/update.repo');
module.exports = {
    getAllAbs,
    getAllByNameAbs,
    getAllByStateAbs,
    getAllByTypeAbs,
    getByIdAbs,
    isAdminAbs,
    blockUserByIdAbs,
    unBlockUserByIdAbs,
    unVerifyUserByIdAbs,
    verifyUserByIdAbs,
    setAdminUserByEmailAbs,
    autheriseUserAbs,
    createUserAbs,
    updateUserAbs,
};
