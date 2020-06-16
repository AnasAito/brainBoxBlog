import remove from "lodash/remove";
const removeData = (prevData, data) => ({
  [Object.keys(prevData)[0]]: {
    count: Object.values(prevData)[0]["count"] - 1,
    data: remove(Object.values(prevData)[0]["data"], function(n) {
      return n["id"] !== data["id"];
    }),
    __typename: Object.values(prevData)[0].__typename
  }
});

export default removeData;
