import * as purchaseOrderQuery from "typedefs/purchaseOrder.gql"
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: purchaseOrderQuery.deletePurchaseOrder,
    mutationName: "deletePurchaseOrder",
    defaultPropName: "deletePurchaseOrder"
  });
};
