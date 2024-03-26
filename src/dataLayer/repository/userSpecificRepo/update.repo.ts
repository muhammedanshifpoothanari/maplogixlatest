const { getTruckModel: modelToUpdateTruck } = require('../getTruckModel');

 type truckDataToUpdate =  {
   ownerId?: string;
   truckImage?: string;
   truckNumber?: string;
   currentLocation?: string;
   truckType?: string;
   capacity?: number;
   operatingStates?: string[];
   activeStatus?: boolean;
}

// Define a function to update truck information
const updateTruck = async (id: string, updatedTruckData: truckDataToUpdate) => {
  console.log(id,updatedTruckData,'jhjgvfreer');
  
  if (!id || !updatedTruckData) {
    throw new Error('ID and updated user data must be provided!');
  }

  const truckModel = modelToUpdateTruck();

  try {
    // Find the user by ID
    const truck = await truckModel.findById(id).exec();

    if (!truck) {
      throw new Error('truck not found in the database!');
    }

    // Update user fields based on the updatedUserData object
    for (const key of Object.keys(updatedTruckData)) {
      truck[key as keyof truckDataToUpdate] = updatedTruckData[key as keyof truckDataToUpdate];

    }

    // Save the updated user document
    const updatedTruck = await truck.save();
    if(updatedTruck === null)
    return false;

    return true;
  } catch (error) {
    throw new Error(`Error in updating the truck in the database: ${error}`);
  }
};

module.exports = {
  updateTruck,
};
