import * as inventoryOnHandQuery from "typedefs/inventoryOnHand.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "inventoryOnHand",
    query: inventoryOnHandQuery.inventoryOnHand,
    defaultPropName: "inventoryOnHand"
  });
};
