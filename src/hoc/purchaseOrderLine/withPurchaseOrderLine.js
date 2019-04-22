import * as purchaseOrderLineQuery from "typedefs/purchaseOrderLine.gql"
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "purchaseOrderLine",
    query: purchaseOrderLineQuery.purchaseOrderLine,
    defaultPropName: "purchaseOrderLine",
    functionName: "getPurchaseOrderLine"
  });
};
