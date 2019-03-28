import * as inventoryQuery from "typedefs/inventory.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "inventories",
    query: inventoryQuery.inventories,
    queryName: "inventories"
  });
};
