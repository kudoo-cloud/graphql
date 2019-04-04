import * as salesOrderQuery from "typedefs/salesOrder.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "salesOrder",
    query: salesOrderQuery.salesOrder,
    defaultPropName: "salesOrder",
    functionName: "getSalesOrder"
  });
};
