import * as salesOrderLineQuery from "typedefs/salesOrderLine.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "salesOrderLine",
    query: salesOrderLineQuery.salesOrderLine,
    defaultPropName: "salesOrderLine",
    functionName: "getSalesOrderLine"
  });
};
