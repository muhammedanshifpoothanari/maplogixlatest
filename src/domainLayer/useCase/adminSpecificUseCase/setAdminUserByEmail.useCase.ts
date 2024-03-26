const { setAdminUserByEmailAbs: setAdminUserByEmailAbsUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperTosetAdminUserByEmailAbs  = require('../utility');
type functionemailToChecksetAdminUserByEmail = (...args: any[]) => Promise<any>;
const setAdminUserByEmailAbsExecute: functionemailToChecksetAdminUserByEmail = async (dependency: typeof setAdminUserByEmailAbsUseCase, email: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(email);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperTosetAdminUserByEmailAbs(setAdminUserByEmailAbsUseCase, setAdminUserByEmailAbsExecute)

