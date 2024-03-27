const { getAllRepo: getAllRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllWrapper  = require('../utility');
type functionTypeToGetAllLoad = (...args: any[]) => Promise<any>;
const execute: functionTypeToGetAllLoad = async (dependency: typeof getAllRepository) => {
  console.log('getAllRepository:' );
  console.log('dependency:', dependency);
  
  const loadData = await dependency();
  console.log('jjjjjjj');
  
  console.log('dependency:', loadData);
  if (loadData === null) {
    return false
  }

  return loadData;
};

module.exports = getAllWrapper(getAllRepository, execute)

