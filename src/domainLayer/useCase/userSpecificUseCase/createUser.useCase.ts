const { createUserAbs: createUserUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperTocreateUser  = require('../utility');
type functionIdToCheckcreateUser = (...args: any[]) => Promise<any>;
type dataAtCreateUseCase = {
  userName?: String,
  mobile?: Number,
}
const createUserAbsExecute: functionIdToCheckcreateUser = async (dependency: typeof createUserUseCase, data: dataAtCreateUseCase) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  console.log(data,'@@@@@@@@@@@@@@@@@@@@@@@');
  
  const userData = await dependency(data);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperTocreateUser(createUserUseCase, createUserAbsExecute)

