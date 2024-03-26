const { autheriseUserAbs: autheriseUserUseCase } = require('../../../dataLayer/repository/index');
const  autheriseWrapperTocreateUser  = require('../utility');
type functionIdToCheckAutheriseUser = (...args: any[]) => Promise<any>;
type dataAtAutheriseUseCase = {
  userName?: String,
  mobile?: Number,
}
const autheriseUserAbsExecute: functionIdToCheckAutheriseUser = async (dependency: typeof createUserUseCase, data: dataAtAutheriseUseCase) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  console.log(data,'@@@@@@@@@@@@@@@@@@@@@@@');
  
  const userData = await dependency(data);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = autheriseWrapperTocreateUser(autheriseUserUseCase, autheriseUserAbsExecute)

