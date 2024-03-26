const { getAllRepo: getAllRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllWrapper  = require('../utility');
type functionTypeToGetAllTruck = (...args: any[]) => Promise<any>;
const execute: functionTypeToGetAllTruck = async (dependency: typeof getAllRepository) => {
  console.log('getAllRepository:' );
  console.log('dependency:', dependency);
  
  const truckData = await dependency();
  console.log('jjjjjjj');
  
  console.log('dependency:', truckData);
  if (truckData === null) {
    return false
  }

  return truckData;
};

module.exports = getAllWrapper(getAllRepository, execute)

