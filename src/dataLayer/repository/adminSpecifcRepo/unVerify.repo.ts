const { getTruckModel: modelToUnVerifyTruckById } = require('../getTruckModel');

const unVerifyTruckById = async (id: string): Promise<boolean> => {
  if (!id) {
    throw new Error('ID was not properly passed to the repository!');
  }
  console.log('reached block truck');
  

  const truckModel = modelToUnVerifyTruckById();

  try {
    // Find the truck with the specified ID
    const truck = await truckModel.findById(id).exec();

    if (!truck) {
      // If no matching truck is found, return false
      return false;
    }

    // Update the IsBlocked field to true
    truck.isVerified = false;
    await truck.save();

    // truck is blocked
    return true;
    
  } catch (error) {
    throw new Error('Error in verifying the truck by ID in the database!');
  }
};

module.exports = {
    unVerifyTruckById 
};
