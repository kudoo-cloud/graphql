import graphqlRequest from "./Request";
import * as PurchaseOrderQuery from "typedefs/purchaseOrder.gql";

class PurchaseOrders {
  static async get(id) {
    return graphqlRequest.getNode("purchaseOrder", PurchaseOrderQuery.purchaseOrder, id);
  }

  static async getPurchaseOrders({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    let purchaseOrders = await graphqlRequest.getAll("purchaseOrders",PurchaseOrderQuery.purchaseOrders,{
      where
    });
    return purchaseOrders;
  }
}

export default PurchaseOrders;