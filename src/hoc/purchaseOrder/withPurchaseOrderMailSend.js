import * as PurchaseOrderQuery from "typedefs/purchaseOrder.gql";
import withMutation from "../withMutation";

export default config => {
    return withMutation({
        config,
        mutation: PurchaseOrderQuery.sendPurchaseOrderMail,
        mutationName: "sendPurchaseOrderMail",
        defaultPropName: "sendPurchaseOrderMail"
    });
};
