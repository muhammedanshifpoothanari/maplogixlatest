const { unBlockUserByIdAbs: unBlockUserByIdUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperTounBlockUserById  = require('../utility');
type functionIdToCheckunBlockUserById = (...args: any[]) => Promise<any>;
const unBlockUserByIdAbsExecute: functionIdToCheckunBlockUserById = async (dependency: typeof unBlockUserByIdUseCase, id: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(id);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperTounBlockUserById(unBlockUserByIdUseCase, unBlockUserByIdAbsExecute)

