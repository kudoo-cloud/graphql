import * as salesOrderLineQuery from "typedefs/salesOrderLine.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "salesOrderLines",
    query: salesOrderLineQuery.salesOrderLines,
    queryName: "salesOrderLines"
  });
};
