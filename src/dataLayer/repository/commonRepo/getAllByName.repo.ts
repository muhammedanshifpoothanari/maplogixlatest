const { getUserModel: modelToGetUserByName } = require('../getUserModel');
const getAllByName = async (
        userName: string,
) => {
    const userModel = modelToGetUserByName();
    try { 
    if (!userName) {
       console.log('name not provided properly');
       
      }
    
      const query = {
        userName: userName || null,
      };

        const usersArray = await userModel.find(query).exec();
        
        if (usersArray.length === 0) {
          return false;
        }

        return usersArray;
      } catch (error) {
        console.log(error);
      }
    };
  
    module.exports = {
         getAllByName
    };