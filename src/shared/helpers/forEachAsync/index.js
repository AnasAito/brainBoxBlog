const forEachAsync = async (array, callback) => {
  const promises = [];

  array.forEach(element => {
    const promise = new Promise(async (resolve, reject) => {
      const result = await callback(element);
      resolve(result);
    });
    promises.push(promise);
  });

  return Promise.all(promises);
};

export default forEachAsync;
