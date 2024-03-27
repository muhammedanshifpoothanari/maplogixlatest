const { createLoadRepo: createLoadRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  wrapperTocreateLoad  = require('../utility');

type functionTypeToCreateLoad = (...args: any[]) => Promise<any>;
type dataAtCreateUseCase = {
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
const createUserAbsExecute: functionTypeToCreateLoad = async (dependency: typeof createLoadRepository,
   data: dataAtCreateUseCase) => {
  console.log('createLoadUseCase:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(data);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = wrapperTocreateLoad(createLoadRepository, createUserAbsExecute)

