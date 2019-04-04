import graphqlRequest from "./Request";
import * as SalesOrderQuery from "typedefs/salesOrder.gql";

class SalesOrder {
  static async createSalesOrder({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      SalesOrderQuery.createSalesOrder,
      {
        data
      }
    );
  }
  static async getSalesOrder(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode("SalesOrder", SalesOrderQuery.salesOrder, id)
      .then(salesOrderObj => salesOrderObj)
      .catch(error => error);
  }
}

export default SalesOrder;
