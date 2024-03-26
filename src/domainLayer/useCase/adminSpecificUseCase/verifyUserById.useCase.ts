const { verifyUserByIdAbs: verifyUserByIdAbsUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToverifyUserByIdAbs = require('../utility');
type functionIdToCheckverifyUserById = (...args: any[]) => Promise<any>;
const verifyUserByIdAbsExecute: functionIdToCheckverifyUserById = async (dependency: typeof verifyUserByIdAbsUseCase, id: string) => {
  console.log('verifyUserByIdAbsUseCase:', verifyUserByIdAbsUseCase);
  console.log('dependency:', dependency);
  const userData = await dependency(id);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToverifyUserByIdAbs(verifyUserByIdAbsUseCase, verifyUserByIdAbsExecute)

