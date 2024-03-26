const { isAdminAbs: isAdminUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const createWrapperToisAdmin  = require('../utility');
type functionIdToCheckIsAdmin = (...args: any[]) => Promise<any>;
const isAdminExecute: functionIdToCheckIsAdmin = async (dependency: typeof isAdminUseCase, email: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(email);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports =  createWrapperToisAdmin(isAdminUseCase, isAdminExecute)

