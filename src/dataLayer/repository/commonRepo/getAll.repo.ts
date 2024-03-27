const { getBidModel } = require('../getBidModel');

const getAll = async () => {
    const bidModel = getBidModel();
    try {
        console.log('getAllRepo');
        
        const bidArray = await bidModel.find().exec();
        
        if (bidArray.length === 0 || !bidArray )
            return false;
        return bidArray;
    } catch (error) {
        throw new Error('Error in getting bid from the database!');
    }
};

module.exports = {
    getAll
}
