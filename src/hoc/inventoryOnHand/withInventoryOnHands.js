import * as inventoryOnHandQuery from "typedefs/inventoryOnHand.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "inventoryOnHands",
    query: inventoryOnHandQuery.inventoryOnHands,
    queryName: "inventoryOnHands"
  });
};
