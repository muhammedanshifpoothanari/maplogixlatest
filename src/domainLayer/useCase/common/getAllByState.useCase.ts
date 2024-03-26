const { getAllByStateAbs: getAllByStateUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToGetAllByState  = require('../utility');
type functionStateToGetAllUserByState = (...args: any[]) => Promise<any>;
const getAllByStateExecute: functionStateToGetAllUserByState = async (dependency: typeof getAllByStateUseCase, state: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(state);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToGetAllByState(getAllByStateUseCase, getAllByStateExecute)

