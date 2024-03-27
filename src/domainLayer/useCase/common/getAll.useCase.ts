const { getAllRepo: getAllRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllWrapper  = require('../utility');
type functionTypeToGetAllBid = (...args: any[]) => Promise<any>;
const execute: functionTypeToGetAllBid = async (dependency: typeof getAllRepository) => {
  console.log('getAllRepository:' );
  console.log('dependency:', dependency);
  
  const bidData = await dependency();
  console.log('jjjjjjj');
  
  console.log('dependency:', bidData);
  if (bidData === null) {
    return false
  }

  return bidData;
};

module.exports = getAllWrapper(getAllRepository, execute)

