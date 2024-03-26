const { getAllByNameAbs: getAllByNameUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const createWrapperToGetAllByName  = require('../utility');
type functionTypeToGetAllUserByName = (...args: any[]) => Promise<any>;
const getAllByNameExecute: functionTypeToGetAllUserByName = async (dependency: typeof getAllByNameUseCase,firstName: string, lastName: string) => {
  console.log('getAllByNameUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(firstName,lastName);

  if (userData === null) {
    return false
  }

  return userData;
};

module.exports = createWrapperToGetAllByName(getAllByNameUseCase, getAllByNameExecute)

