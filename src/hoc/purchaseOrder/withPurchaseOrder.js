import * as purchaseOrderQuery from "typedefs/purchaseOrder.gql"
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "purchaseOrder",
    query: purchaseOrderQuery.purchaseOrder,
    defaultPropName: "purchaseOrder",
    functionName: "getPurchaseOrder"
  });
};
