import graphqlRequest from './Request';
import { createSalesOrder, salesOrder as orderQuery } from 'typedefs/salesOrder.gql';

class SalesOrder {
  static async createSalesOrder({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createSalesOrder, {
      data,
    });
  }
  static async getSalesOrder(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode('SalesOrder', orderQuery, id)
      .then((salesOrderObj) => salesOrderObj)
      .catch((error) => error);
  }
}

export default SalesOrder;
