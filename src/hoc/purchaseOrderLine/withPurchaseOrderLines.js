import * as purchaseOrderLineQuery from "typedefs/purchaseOrderLine.gql"
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "purchaseOrderLines",
    query: purchaseOrderLineQuery.purchaseOrderLines,
    queryName: "purchaseOrderLines"
  });
};
