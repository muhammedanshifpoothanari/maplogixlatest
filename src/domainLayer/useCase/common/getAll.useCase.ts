const { getAllRepo: getAllRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllWrapper  = require('../utility');
type functionTypeToGetAllChat = (...args: any[]) => Promise<any>;
const execute: functionTypeToGetAllChat = async (dependency: typeof getAllRepository) => {
  console.log('getAllRepository:' );
  console.log('dependency:', dependency);
  
  const chatData = await dependency();
  console.log('jjjjjjj');
  
  console.log('dependency:', chatData);
  if (chatData === null) {
    return false
  }

  return chatData;
};

module.exports = getAllWrapper(getAllRepository, execute)

