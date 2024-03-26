const { createTruckRepo: createTruckRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  wrapperTocreateTruck  = require('../utility');
type functionTypeToCreateTruck = (...args: any[]) => Promise<any>;
type dataAtCreateUseCase = {
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

const createTruckExecute: functionTypeToCreateTruck = async (dependency: typeof createTruckRepository,
   data: dataAtCreateUseCase) => {
  console.log('createLoadUseCase:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(data);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = wrapperTocreateTruck(createTruckRepository, createTruckExecute)

