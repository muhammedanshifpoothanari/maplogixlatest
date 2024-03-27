const { getBidModel: modelToUpdateBid } = require('../getBidModel');

 type bidDataToUpdate =  {
  loadId?: string,
  truckId?: string,
  userId?: string,
  bidPrice?: number,
  chatId?: string
}

// Define a function to update bid information
const updateBid = async (id: string, updatedBidData: bidDataToUpdate) => {
  console.log(id,updatedBidData,'jhjgvfreer');
  
  if (!id || !updatedBidData) {
    throw new Error('ID and updated user data must be provided!');
  }

  const bidModel = modelToUpdateBid();

  try {
    // Find the bid by ID
    const bid = await bidModel.findById(id).exec();

    if (!bid) {
      throw new Error('truck not found in the database!');
    }

    // Update user fields based on the updatedUserData object
    for (const key of Object.keys(updatedBidData)) {
      bid[key as keyof bidDataToUpdate] = updatedBidData[key as keyof bidDataToUpdate];

    }

    // Save the updated user document
    const updatedBid = await bid.save();
    if(updatedBid === null)
    return false;

    return true;

  } catch (error) {
    throw new Error(`Error in updating the bid in the database: ${error}`);
  }
};

module.exports = {
  updateBid,
};
