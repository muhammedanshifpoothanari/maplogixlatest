const { getTruckModel: modelToBlockTruckById } = require('../getTruckModel');

const blockTruckById = async (id: string): Promise<boolean> => {
  if (!id) {
    throw new Error('ID was not properly passed to the repository!');
  }
  console.log('reached block truck');
  

  const truckModel = modelToBlockTruckById();

  try {
    // Find the user with the specified ID
    const truck = await truckModel.findById(id).exec();

    if (!truck) {
      // If no matching  is found, return false
      return false;
    }

    // Update the IsBlocked field to true
    truck.isBlocked = true;
    await truck.save();

    // truck is blocked
    return true;
    
  } catch (error) {
    throw new Error('Error in blocking the truck by ID in the database!');
  }
};

module.exports = {
    blockTruckById 
};
