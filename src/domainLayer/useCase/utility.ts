
type ExecuteFunction = (...args: any[]) => Promise<any>; 

module.exports = (dependency: any, execute: ExecuteFunction) => {
  
  if (!dependency) {
    return false
  }

  return async (...args: any[]) => {
    try {      
      const result = await execute(dependency, ...args);
      return result;
    } catch (error) {
      throw new Error(`An error occurred: ${error}`);
    }
  };
};



