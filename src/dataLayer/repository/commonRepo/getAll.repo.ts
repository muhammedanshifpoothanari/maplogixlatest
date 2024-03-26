const { getTruckModel } = require('../getTruckModel');

const getAll = async () => {
    const truckModel = getTruckModel();
    try {
        console.log('getAllRepo');
        
        const truckArray = await truckModel.find().exec();
        
        if (truckArray.length === 0 || !truckArray )
            return false;
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database!');
    }
};

module.exports = {
    getAll
}
