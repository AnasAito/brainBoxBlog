const concatData = (prevData, data) => ({
    [Object.keys(prevData)[0]]: {
      count: Object.values(prevData)[0]["count"] + 1,
      data: Object.values(prevData)[0]["data"].concat(data),
      __typename: Object.values(prevData)[0].__typename
    }
  });
  
  export default concatData;
  