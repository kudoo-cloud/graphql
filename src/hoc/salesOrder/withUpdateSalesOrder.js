import * as salesOrderQuery from "typedefs/salesOrder.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: salesOrderQuery.updateSalesOrder,
    mutationName: "updateSalesOrder",
    defaultPropName: "updateSalesOrder"
  });
};
