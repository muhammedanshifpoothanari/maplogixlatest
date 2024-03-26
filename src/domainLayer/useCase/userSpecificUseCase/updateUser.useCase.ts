import { ObjectId } from "mongoose";

const { updateUserAbs: updateUserUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToupdateUser  = require('../utility');
type functionIdToCheckupdateUser = (...args: any[]) => Promise<any>;
type dataAtupdateUserUseCase = {
  id: string,
  userName?: String,
  mobile: Number,
  assetId: String,
  userType?: String,
  state?: String,
  about?: String,
  yearOfExperience?: Number,
  operatingStates?: string[], 
  operatingRoutes?: string[], 
  handledMaterials?: string[],
  accountNumber?: String,
}
const updateUserAbsExecute: functionIdToCheckupdateUser = async (dependency: typeof updateUserUseCase,data: dataAtupdateUserUseCase) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const id: String = data.id
  console.log(data,'at usecase');
  
  const userData = await dependency(id, data);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToupdateUser(updateUserUseCase, updateUserAbsExecute)
