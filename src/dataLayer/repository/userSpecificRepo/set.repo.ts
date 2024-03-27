const { getBidModel: modelToCreateBid } = require('../getBidModel');
  
interface BidDocument extends Document {
  loadId?: string,
  truckId?: string,
  userId?: string,
  bidPrice?: number,
  chatId?: string
}
  
const createBid = async (bidData: BidDocument) => {
  console.log(bidData,'@@@@');
  
  if (!bidData) {
    throw new Error('bidData was not properly passed to the repository!');
  }

  const bidModel = modelToCreateBid();

  try {
    const newBid = new bidModel({
        ...bidData,
        isBlocked: false,
        isVerified: false,
    });

    // Save the new truck to the database
    const doneTheJob = await newBid.save();

    if(!doneTheJob)
    return false;

    // Return the newly created truck
    return true;
  } catch (error) {
    throw new Error(`Error in creating the truck in the database: ${error}`);
  }
};

module.exports = {
    createBid,
};
