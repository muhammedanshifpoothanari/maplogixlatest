type ExecuteFunction = (...args: any[]) => Promise<any>; 

module.exports = (dependency: any, execute: ExecuteFunction) => {
  console.log('reached at utility');
  
  if (!dependency) {
    return false
  }
  console.log('reached at utility');

  return async (...args: any[]) => {
    try {
      const result = await execute(dependency, ...args);
      return result;
    } catch (error) {
      throw new Error(`An error occurred: ${error}`);
    }
  };
};

