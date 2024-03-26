const { getTruckModel : modelToGetTruckByWeight } = require('../getTruckModel')
const getAllByWeight = async (capacity: number , sort: number = 1) => {
    if (!capacity && sort)
        throw new Error('capacity or sort was not properly passed to the repository!');

    const truckModel = modelToGetTruckByWeight();
    try {
        let truckArray: any;
        if(capacity){
             truckArray = await truckModel.find({capacity: capacity})
            .sort({ weight: sort }) 
            .exec();
        }else{
             truckArray = await truckModel.find({})
            .sort({ weight: sort }) 
            .exec();
        }
          
        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by weight!');
    }
};

module.exports = {
    getAllByWeight
}