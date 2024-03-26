const { blockUserByIdAbs: blockUserByIdAbsUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToblockUserByIdAbs = require('../utility');
type functionIdToCheckblockUserById = (...args: any[]) => Promise<any>;
const blockUserByIdAbsExecute: functionIdToCheckblockUserById = async (dependency: typeof blockUserByIdAbsUseCase, id: string) => {
    console.log('verifyUserByIdAbsUseCase:', blockUserByIdAbsUseCase);
  console.log('dependency:', dependency);
  const userData = await dependency(id);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToblockUserByIdAbs(blockUserByIdAbsUseCase, blockUserByIdAbsExecute)

