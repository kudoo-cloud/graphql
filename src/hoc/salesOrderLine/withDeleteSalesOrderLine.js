import * as salesOrderLineQuery from "typedefs/salesOrderLine.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: salesOrderLineQuery.deleteSalesOrderLine,
    mutationName: "deleteSalesOrderLine",
    defaultPropName: "deleteSalesOrderLine"
  });
};
