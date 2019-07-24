import graphqlRequest from './Request';
import {
  purchaseOrder,
  purchaseOrders as ordersQuery,
} from 'typedefs/purchaseOrder.gql';

class PurchaseOrders {
  static async get(id) {
    return graphqlRequest.getNode('purchaseOrder', purchaseOrder, id);
  }

  static async getPurchaseOrders({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    let purchaseOrders = await graphqlRequest.getAll(
      'purchaseOrders',
      ordersQuery,
      {
        where,
      }
    );
    return purchaseOrders;
  }
}

export default PurchaseOrders;
