const { createAbs : wrappedFunctionForCreating,autheriseAbs: wrappedFunctionForAuthering} = require('../../../domainLayer/useCase/index');


const setCntrl = async (data:any) => {
  try {
    console.log(data.body,'!!!!!!!!!!!!');
    let users = null;
    const {
      userName,
      mobile,
      otp,
      requestType,
    } = data.body;
    const newData = {
      userName,
      mobile,
      otp,
      requestType
    }

    if(requestType === 'sendOtp') {
     users = await wrappedFunctionForCreating(newData);
    } else {
      users = await wrappedFunctionForAuthering(newData);
    }
    
    if (users) 
      return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    setCntrl
};