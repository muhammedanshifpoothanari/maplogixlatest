const { getTruckModel: modelToCreateTruck } = require('../getTruckModel');
  
interface TruckDocument extends Document {
  ownerId?: string;
  truckImage?: string;
  truckNumber?: string;
  currentLocation?: string;
  truckType?: string;
  capacity?: number;
  operatingStates?: string[];
  activeStatus?: boolean;
}
  
const createTruck = async (truckData: TruckDocument) => {
  if (!truckData) {
    throw new Error('truckData was not properly passed to the repository!');
  }

  const truckModel = modelToCreateTruck();

  try {
    const newTruck = new truckModel({
        ...truckData,
        isBlocked: false,
        isVerified: false,
    });

    // Save the new truck to the database
    const doneTheJob = await newTruck.save();
    if(!doneTheJob)
    return false;
    // Return the newly created truck
    return true;
  } catch (error) {
    throw new Error(`Error in creating the truck in the database: ${error}`);
  }
};

module.exports = {
    createTruck,
};
