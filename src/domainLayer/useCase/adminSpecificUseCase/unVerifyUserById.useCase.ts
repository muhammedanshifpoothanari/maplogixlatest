const { unVerifyUserByIdAbs: unVerifyUserByIdUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperTounVerifyUserById  = require('../utility');
type functionIdToCheckunVerifyUserById = (...args: any[]) => Promise<any>;
const unVerifyUserByIdAbsExecute: functionIdToCheckunVerifyUserById = async (dependency: typeof unVerifyUserByIdUseCase, id: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(id);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperTounVerifyUserById(unVerifyUserByIdUseCase, unVerifyUserByIdAbsExecute)

