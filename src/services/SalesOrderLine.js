import graphqlRequest from './Request';
import {
  createSalesOrderLine,
  salesOrderLine,
} from 'typedefs/salesOrderLine.gql';

class SalesOrderLine {
  static async createSalesOrderLine({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createSalesOrderLine, {
      data,
    });
  }
  static async getSalesOrderLine(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode('SalesOrderLine', salesOrderLine, id)
      .then((salesOrderLineObj) => salesOrderLineObj)
      .catch((error) => error);
  }
}

export default SalesOrderLine;
