const { getLoadModel : modelToGetLoadByWeight } = require('../getLoadModel')
const getAllByWeight = async (loadWeight: number , sort: number = 1) => {
    if (!loadWeight && sort)
        throw new Error('weight or sort was not properly passed to the repository!');

    const loadModel = modelToGetLoadByWeight();
    try {
        let loadArray: any;
        if(loadWeight){
             loadArray = await loadModel.find({loadWeight: loadWeight})
            .sort({ weight: sort }) 
            .exec();
        }else{
             loadArray = await loadModel.find({})
            .sort({ weight: sort }) 
            .exec();
        }
          
        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by weight!');
    }
};

module.exports = {
    getAllByWeight
}