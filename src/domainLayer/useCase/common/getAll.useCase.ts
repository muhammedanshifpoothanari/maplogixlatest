const { getAllAbs: getAllUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const createWrapper  = require('../utility');

type functionTypeToGetAllUser = (...args: any[]) => Promise<any>;

const execute: functionTypeToGetAllUser = async (dependency: typeof getAllUseCase) => {
  console.log('getAllUseCase:' );
  console.log('dependency:', dependency);
  
  const userData = await dependency();
  console.log('jjjjjjj');
  
  console.log('dependency:', userData);
  if (userData === null) {
    return false
  }

  return userData;
};

module.exports = createWrapper(getAllUseCase, execute)

