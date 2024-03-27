const { updateLoadRepo: updateLoadRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  updateWrapperToupdateLoad  = require('../utility');
type functionToUpdateLoad = (...args: any[]) => Promise<any>;
type dataAtupdateUserUseCase = {
  id: string,
  loadName?: string;
  ownerId?: string;
  loadType?: string;
  startingPoint?: string;
  destination?: string;
  boxSize?: string;
  loadWeight?: number;
  status?: string;
  pricePerUnit?: number;
  createdAt?: Date;
  expiresAt?: Date;
  updatedAt?: Date;
}
const updateUserAbsExecute: functionToUpdateLoad = async (dependency: typeof updateWrapperToupdateLoad,data: dataAtupdateUserUseCase) => {
  console.log('updateLoadRepository:', );
  console.log('dependency:', dependency);
  const id: string = data.id
  console.log(data,'at usecase');
  
  const loadData = await dependency(id, data);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = updateWrapperToupdateLoad(updateLoadRepository, updateUserAbsExecute)
