import * as purchaseOrderLineQuery from "typedefs/purchaseOrderLine.gql"
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: purchaseOrderLineQuery.createPurchaseOrderLine,
    mutationName: "createPurchaseOrderLine",
    defaultPropName: "createPurchaseOrderLine"
  });
};
