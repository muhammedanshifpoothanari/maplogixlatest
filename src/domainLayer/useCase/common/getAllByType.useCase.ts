const { getAllByTypeAbs: getAllByTypeUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToGetAllByType  = require('../utility');
type functionTypeToGetAllUserByType = (...args: any[]) => Promise<any>;
const getAllByTypeExecute: functionTypeToGetAllUserByType = async (dependency: typeof getAllByTypeUseCase,type: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(type);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToGetAllByType(getAllByTypeUseCase, getAllByTypeExecute)

