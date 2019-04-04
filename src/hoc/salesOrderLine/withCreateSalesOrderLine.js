import * as salesOrderLineQuery from "typedefs/salesOrderLine.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: salesOrderLineQuery.createSalesOrderLine,
    mutationName: "createSalesOrderLine",
    defaultPropName: "createSalesOrderLine"
  });
};
