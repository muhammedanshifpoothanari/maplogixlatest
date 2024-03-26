const { getByIdAbs: getAllByIdUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const createWrapperToGetAllById = require('../utility');
type functionIdToGetAllUserById = (...args: any[]) => Promise<any>;
const getAllByIdExecute: functionIdToGetAllUserById = async (dependency: typeof getAllByIdUseCase, id: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(id);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToGetAllById(getAllByIdUseCase, getAllByIdExecute)

