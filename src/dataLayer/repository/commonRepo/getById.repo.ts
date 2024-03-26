const { getTruckModel : modelToGetTruckById } = require('../getTruckModel')
const getByTruckId = async (id: string) => {
    if (!id)
        throw new Error('truck id was not properly passed to the repository!');

    const truckModel = modelToGetTruckById();
    try {
        const truckArray = await truckModel.findById(id).exec();

        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by load id!');
    }
};

module.exports = {
    getByTruckId
}