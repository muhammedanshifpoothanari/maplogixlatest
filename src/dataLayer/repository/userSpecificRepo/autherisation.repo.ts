const { getUserModel: modelToAutheriseUser } = require('../getUserModel');

type userDataToAutherise = {
  userName?: String,
  mobile?: Number,
  otp?: number,
}


const AutheriseUser = async (updatedUserData: userDataToAutherise) => {

  console.log(updatedUserData,'reached For autherise user');
  
  if (!updatedUserData) {
    throw new Error('id and updated user data must be provided!');
  }

  const userModel = modelToAutheriseUser();

  try {

    const user = await userModel.findOne({ userName: updatedUserData.userName,mobile: updatedUserData.mobile,otp:updatedUserData.otp}).exec();
    
    if (!user) {
      return false;
        }
        if(user.otpExpires >= Date.now()) return true;
        return false;
  } catch (error) {
    throw new Error(`Error in updating the user in the database: ${error}`);

  }
};

module.exports = {
  AutheriseUser,
};
