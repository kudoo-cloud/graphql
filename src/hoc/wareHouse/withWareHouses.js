import * as wareHouseQuery from "typedefs/wareHouse.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "wareHouses",
    query: wareHouseQuery.wareHouses,
    queryName: "wareHouses"
  });
};
