import * as inventoryQuery from "typedefs/inventory.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "inventory",
    query: inventoryQuery.inventory,
    defaultPropName: "inventory",
    functionName: "getInventory"
  });
};
