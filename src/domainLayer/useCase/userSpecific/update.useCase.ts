const { updateTruckRepo: updateTruckRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  updateWrapperToupdateTruck  = require('../utility');
type functionToUpdateTruck = (...args: any[]) => Promise<any>;
type dataAtupdateTruckUseCase = {
  id: string,
  ownerId?: string;
  truckImage?: string;
  truckNumber?: string;
  currentLocation?: string;
  truckType?: string;
  capacity?: number;
  operatingStates?: string[];
  activeStatus?: boolean;
  isBlocked?: boolean;
  isVerified?: boolean;
  expiresAt?: Date;
}
const updateTruckExecute: functionToUpdateTruck = async (dependency: typeof updateWrapperToupdateTruck,data: dataAtupdateTruckUseCase) => {
  console.log('updateTruckRepository:', );
  console.log('dependency:', dependency);
  const id: string = data.id
  console.log(data,'at usecase');
  
  const truckData = await dependency(id, data);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = updateWrapperToupdateTruck(updateTruckRepository, updateTruckExecute)
