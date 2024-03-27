const { getLoadModel: modelToCreateLoad } = require('../getLoadModel');
  
export interface ILoad extends Document{
  loadName?: string;
  ownerId?: string;
  loadType?: string;
  startingPoint?: string;
  destination?: string;
  boxSize?: string;
  loadWeight?: number;
  pricePerUnit?: number;
  expiresAt?: Date;
}
  
const createLoad = async (loadData: ILoad) => {
  console.log(loadData,'eeww');
  
  if (!loadData) {
    throw new Error('loadData was not properly passed to the repository!');
  }

  const loadModel = modelToCreateLoad();

  try {
    // Create a new user document with the provided data, including the isAdmin field
    const newLoad = new loadModel({
        ...loadData,
        isBlocked: false,
        isVerified: false,
        createdAt : new Date()
    });

    // Save the new load to the database
    const doneTheJob = await newLoad.save();
    if(!doneTheJob)
    return false;
    // Return the newly created load
    return true;
  } catch (error) {
    throw new Error(`Error in creating the load in the database: ${error}`);
  }
};

module.exports = {
    createLoad,
};
