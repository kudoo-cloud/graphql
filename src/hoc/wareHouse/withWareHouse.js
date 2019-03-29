import * as wareHouseQuery from "typedefs/wareHouse.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "wareHouse",
    query: wareHouseQuery.wareHouse,
    defaultPropName: "wareHouse",
    functionName: "getWareHouse"
  });
};
